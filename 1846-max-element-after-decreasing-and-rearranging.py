# You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it satisfies these conditions:
# The value of the first element in arr must be 1.
# The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.
# There are 2 types of operations that you can perform any number of times:
# Decrease the value of any element of arr to a smaller positive integer.
# Rearrange the elements of arr to be in any order.
# Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.

# Example 1:
# Input: arr = [2,2,1,2,1]
# Output: 2
# Explanation:
# We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
# The largest element in arr is 2.

# Example 2:
# Input: arr = [100,1,1000]
# Output: 3
# Explanation:
# One possible way to satisfy the conditions is by doing the following:
# 1. Rearrange arr so it becomes [1,100,1000].
# 2. Decrease the value of the second element to 2.
# 3. Decrease the value of the third element to 3.
# Now arr = [1,2,3], which satisfies the conditions.
# The largest element in arr is 3.

# Example 3:
# Input: arr = [1,2,3,4,5]
# Output: 5
# Explanation: The array already satisfies the conditions, and the largest element is 5.

###################################################################################################33

# more efficient O(n*logn) solution, only needs one iteration but needs to sort the list
# 1.) sort arr
# 2.) set the max val at 1 as this will always be the first val of arr
# 3.) iterate from the 2nd index of arr on
# 4.) if the current element of the array is larger than max_val, increment max val by 1
# 5.) return max val after iterating

class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()
        max_val = 1

        for i in range(1, len(arr)):
            if arr[i] > max_val:
                max_val += 1

        return max_val

# brute force, too slow O(m*n) where m is arr length and n is number of moves that need to be made
# only passes 40/49

class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()
        arr[0] = 1
        unsatisfied = True

        while unsatisfied:
            counter = 0

            for i in range(len(arr) - 1):
                counter += 1

                if abs(arr[i] - arr[i+1]) > 1:
                    arr[i+1] = arr[i] + 1
                    break

            if counter == len(arr) - 1:
                unsatisfied = False

        return max(arr)
