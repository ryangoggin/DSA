# see js file for thought process

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        prereqGraph = dict()
        taking = set()
        taken = set()

        for prerequisite in prerequisites:
            [course, prereq] = prerequisite

            if course not in prereqGraph:
                prereqGraph[course] = [prereq]
            else:
                prereqGraph[course].append(prereq)

        for course in prereqGraph:
            if self.dfsIsCyclic(course, prereqGraph, taking, taken):
                return False

        return True

    def dfsIsCyclic(self, course, prereqGraph, taking, taken):
        taking.add(course)
        if course in prereqGraph:
            prereqs = prereqGraph[course]

            if prereqs:
                for prereq in prereqs:
                    if prereq in taken:
                        continue
                    if prereq in taking:
                        return True
                    if self.dfsIsCyclic(prereq, prereqGraph, taking, taken):
                        return True

        taking.remove(course)
        taken.add(course)
        return False
