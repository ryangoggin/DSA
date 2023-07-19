/*

*/

/*
1.) set up visited set
2.) create a helper function to navigate possible rooms and fill visited as rooms are visited
3.) recursively call the dfs helper on the neighboring room if it hasn't been visited yet
4.) return after iterating all neighbors of a room
5.) add 0 to visited because it is where you start and call the dfs helper on 0
6.) return whether the visited set's size is the same as the number of rooms there are
*/

var canVisitAllRooms = function(rooms) {
    let numRooms = rooms.length;

    let visited = new Set();

    function dfs(room) {
        let neighbors = rooms[room];

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                dfs(neighbor);
            }
        }
        return;
    }

    visited.add(0);
    dfs(0);

    return visited.size === numRooms;
};
