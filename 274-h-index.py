# Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
# According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

# Example 1:

# Input: citations = [3,0,6,1,5]
# Output: 3
# Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
# Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

# Example 2:

# Input: citations = [1,3,1]
# Output: 1

#########################################################################################################
# time: O(nlog(n)) b/c use of sort
# 1.) first, sort and then reverse the citations list
# 2.) iterate through the list, i+1 is the publication #, citations[i] is that publications citations
# 3.) if the publication # is equal to the number of citations of that publication, return i+1 as that publication is the h index
# 4.) otherise once the current publication # becomes greater than the citations, the previous publication is the h index
# 5.) if iteration completes, the h index is the last index or the length of the list

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort()
        citations.reverse()

        for i in range(len(citations)):
            if i+1 == citations[i]:
                return i+1
            elif i+1 > citations[i]:
                return i


        return len(citations)
