/*
invert a binary tree (swap left and right children nodes) and return its root
*/

/*
0.) base case is return root if root is null
1.) use recursion to traverse the tree (pass in left and right children back to the function)
2.) store the left child in a variable, assign the left child to the right child, assign the right child to the stored variable with the old left child in it
3.) return root
*/

var invertTree = function(root) {
    if (!root) return root;

    invertTree(root.left);
    invertTree(root.right);

    let oldLeft = root.left;
    root.left = root.right;
    root.right = oldLeft;

    return root;
};
