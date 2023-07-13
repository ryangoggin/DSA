/*

*/

/*
DFS
1.) use a map to set up the adjacency list
2.) have 2 sets to track courses currently being taken, and courses that have already been taken
3.) fill the adjacency list (graph is unidirectional)
4.) iterate over the buckets in the prereq graph and return false if the dfs cyclic check helper returns true on any of the courses
5.) in the dfs cyclic check helper function, pass in the course, the graph, the taking set, and the taken set
5a.) add the course to the taking set
5b.) get the prereqs from that course's bucket in the graph
5c.) if the bucket was populated, iterate over it
5d.) on each prereq do 3 checks:
    1.) if the prereq is already taken, continue
    2.) if the prereq is currently being take, return false as it is cyclic and makes the schedule impossible
    3.) if the recursive call of the cyclic check fxn returns true (the prereqs prereqs are being taken) and the schedule is also impossible, return false
6.) on each iteration over the graph, if the cyclic check returns true for any of the courses, return false
7.) if the iteration completes that means none of the courses result in cyclic prereqs and the schedule is possible, return true
*/

var canFinish = function(numCourses, prerequisites) {
    let prereqGraph = new Map();
    let taking = new Set();
    let taken = new Set();

    for(let prerequisite of prerequisites){
        let [course, prereq] = prerequisite;

        if(!prereqGraph.has(course)){
            prereqGraph.set(course, [prereq]);
        }else{
            prereqGraph.get(course).push(prereq);
        }
    }

    for(let prereq of prereqGraph){
        let [course, prereqCourse] = prereq;
        if(dfsIsCyclic(course, prereqGraph, taking, taken)){
            return false;
        }
    }

    return true;
}

let dfsIsCyclic = function(course, prereqGraph, taking, taken){
    taking.add(course);
    let prereqs = prereqGraph.get(course);

    if(prereqs){
       for(let prereq of prereqs){
            if(taken.has(prereq)) continue;

            if(taking.has(prereq)) return true;

            if(dfsIsCyclic(prereq, prereqGraph, taking, taken)) return true;
        }
    }

    taking.delete(course);
    taken.add(course);
    return false;
}
