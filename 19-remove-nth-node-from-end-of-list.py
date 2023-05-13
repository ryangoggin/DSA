# see reasoning on js file

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head:
            return head

        length = 1
        count_node = head

        while count_node.next:
            length += 1
            count_node = count_node.next

        if length == n:
            return head.next

        remove_node = length - n
        curr_node = head

        for i in range(1, remove_node + 1):
            if i == remove_node:
                if curr_node.next:
                    curr_node.next = curr_node.next.next
                else:
                    curr_node.next = null
                return head
            curr_node = curr_node.next
