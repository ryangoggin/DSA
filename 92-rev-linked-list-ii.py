# see js file for thought process

class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        curr = head
        start = head
        counter = 1

        while counter < left:
            start = curr
            curr = curr.next
            counter += 1

        prev = None
        tail = curr

        while counter <= right:
            oldNext = curr.next
            curr.next = prev
            prev = curr
            curr = oldNext
            counter += 1

        start.next = prev
        tail.next = curr

        if left == 1:
            return prev
        else:
            return head
