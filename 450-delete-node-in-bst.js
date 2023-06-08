/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.


Example 1:

Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
*/

/*
0.) make a helper to do DFS (only recursively call on the left or the right child depending on if the val is greater than or less than or equal to the key)
1.) in the helper if there isn't a root, just return the root passed in
2.) if the root's val is the key then it will be deleted
3.) if there's only one child node, return that node
4.) if there's both children, set the current node to the right child
5.) go as far left from the right child as possible as this will be what replaces the deleted node
5a.) once at furthest left child of the right child, set curr's left to the deleted node's left and return that node's right child
6.) return the result of the root passed into the helper DFS fxn
*/

var deleteNode = function(root, key) {
    function dfsDel(root) {
        if (!root) return root;

        if (root.val === key) {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            let curr = root.right;
            while (curr.left) {
                curr = curr.left;
            }
            curr.left = root.left;
            return root.right;
        }

        if (root.val > key) {
            root.left = dfsDel(root.left);
        } else {
            root.right = dfsDel(root.right);
        }
        return root;
    }

    return dfsDel(root);
};
