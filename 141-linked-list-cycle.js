/*
given the head of a linked list, check if the linked list has a cycle in it
there is a cycle if a node that has been previously visited can be revisited by following nodes' next pointers
pos is used to denote a node's index internally (NOT passed as a parameter)
*/

/*
1.) iterate while the head value exists (through the linked list)
2.) use a set to track indices that have been visited w/ pos
3.) if any node visited in the loop is already in the set, return true
4.) if the loop completes without returning true there is no cycle, return false
*/
// // NVM TO THE ABOVE/BELOW SOLUTION, POS CANT BE ACCESSED BECAUSE HAHA
// var hasCycle = function(head) {
//     let visited = new Set();

//     while (head) {
//         console.log(visited);
//         if (visited.has(head.pos)) {
//             return true;
//         } else {
//             visited.add(head.pos);
//             head = head.next;
//         }
//     }

//     return false;
// };

/*
1.) use 2 pointers, fast and slow
2.) start fast at the head, head will be the "slow" pointer
3.) update head with next, update fast with next.next
4.) if fast catches up with slow before exiting the loop, there's a cycle (return true)
5.) if the loop completes without fast catching slow, there's no cycle (return false)
*/
var hasCycle = function(head) {
    let fast = head;

    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (fast === head) return true;
    }

    return false;
};
