# see js file for thought process

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        nodes = {}
        curr = head

        while curr:
            nodes[curr] = Node(curr.val)
            curr = curr.next

        curr = head
        while curr:
            nodes[curr].next = nodes.get(curr.next)
            nodes[curr].random = nodes.get(curr.random)
            curr = curr.next

        return nodes[head]
