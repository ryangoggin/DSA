# # look at js file for reasoning
# class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:
#         fast = head

#         while fast and fast.next:
#             head = head.next
#             fast = fast.next.next
#             if (fast is head):
#                 return True

#         return False



# save memory by creating separate slow pointer and adding more conditionals
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        fast = head
        slow = head

        while slow is not None and fast is not None:
            slow = slow.next
            fast = fast.next
            if fast is None:
                continue
            else:
                fast = fast.next
            if slow is fast:
                return True

        return False
