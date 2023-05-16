# see js file for thought process
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        vals = []
        curr_node = head

        while curr_node:
            vals.append(curr_node.val)
            curr_node = curr_node.next

        backward = len(vals) - 1

        for forward in range(len(vals)//2):
            if vals[forward] != vals[backward]:
                return False
            backward -= 1
        return True
