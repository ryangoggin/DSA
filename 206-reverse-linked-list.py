# look at js file for reasoning/explanation

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        previous = None

        while head:
            old_next = head.next
            head.next = previous
            previous = head
            head = old_next

        return previous
