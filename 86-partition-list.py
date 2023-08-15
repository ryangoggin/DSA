# Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

# You should preserve the original relative order of the nodes in each of the two partitions.

# Example 1:


# Input: head = [1,4,3,2,5,2], x = 3
# Output: [1,2,2,4,3,5]

# Example 2:

# Input: head = [2,1], x = 2
# Output: [1,2]

################################################################################################################

class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        before = ListNode(0)
        before_curr = before
        after = ListNode(0)
        after_curr= after

        while head:
            # the val comes before x
            if head.val < x:
                before_curr.next = head
                before_curr = head
            # the val comes after x or is x
            else:
                after_curr.next = head
                after_curr = head
            # move to the next node
            head = head.next

            # merge before and after
            after_curr.next = None
            # first of after i the 0 node, set it to its next
            before_curr.next = after.next

        return before.next
