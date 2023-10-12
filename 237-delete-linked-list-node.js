// see py file for thought process

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
