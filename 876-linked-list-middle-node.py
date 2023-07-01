# see js file for thought process

class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        length = 0

        while curr.next:
            length += 1
            curr = curr.next

        middle = ceil(length/2)

        curr = head
        for i in range(middle):
            curr = curr.next

        return curr
