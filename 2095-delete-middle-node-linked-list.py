# look at js file for thought process

class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        n = 0
        counter = head

        while counter:
            counter = counter.next
            n += 1

        if n < 2:
            return None

        before_mid = n//2 - 1

        i = 0
        curr = head

        while (curr):
            if i == before_mid:
                curr.next = curr.next.next
                return head
            curr = curr.next
            i += 1
