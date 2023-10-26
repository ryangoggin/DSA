/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.
The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.


Example 1:

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
*/

/*
time: O(n) need to iterate across the LL twice, once to fill out the map, then next to assign next and random to the deep copy nodes
space: O(n) need to store each new node copy

1.) if there is no list, return null as it is a copy of that list
2.) create a new map to store deep copies of the original nodes, keys are the old nodes and values are the new ones
3.) iterate over the original list to make kv pairs described above, the new nodes won't have next or random properties yet
4.) iterate over the original list again to set the next and random properties of the deep copy nodes
5.) return the head deep copy by passing in the original head node to the map
*/

var copyRandomList = function(head) {
    if (!head) return null;

    let nodes = new Map();
    let curr = head;

    while (curr) {
        nodes.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        nodes.get(curr).next = nodes.get(curr.next) || null;
        nodes.get(curr).random = nodes.get(curr.random) || null;
        curr = curr.next;
    }

    return nodes.get(head);
};
