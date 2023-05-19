# look to js file for thought process

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode(0)
        res_head = res

        node_sum = 0
        carry = 0

        curr1 = l1
        curr2 = l2

        while (curr1 or curr2 or node_sum > 0):
            if curr1:
                node_sum += curr1.val
                curr1 = curr1.next

            if curr2:
                node_sum += curr2.val
                curr2 = curr2.next

            if node_sum >= 10:
                carry = 1
                node_sum -= 10

            res_head.next = ListNode(node_sum)
            res_head = res_head.next

            node_sum = carry
            carry = 0

        return res.next
