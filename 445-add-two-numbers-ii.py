# see js file for thought process

class Solution:
    def addLL(self, l1, l2):
        stack1 = []
        stack2 = []

        while l1:
            stack1.append(l1.val)
            l1 = l1.next

        while l2:
            stack2.append(l2.val)
            l2 = l2.next

        res = None
        carry = 0

        while stack1 or stack2 or carry:
            digit1 = stack1.pop() if stack1 else 0
            digit2 = stack2.pop() if stack2 else 0

            tot = digit1 + digit2 + carry
            digit = tot % 10
            carry = tot // 10

            newNode = ListNode(digit)
            newNode.next = res
            res = newNode

        return res

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        return self.addLL(l1, l2)
