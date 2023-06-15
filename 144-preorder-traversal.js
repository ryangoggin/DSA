/*
uh yeah it's a preorder tree traversal
*/

/*
recrusive solution
*/

var preorderTraversal = function(root) {
    let res = [];

    function preorder(node){
        if (!node) return;
        res.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);

    return res;
};
