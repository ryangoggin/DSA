// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

/*
DFS:
1.) use 2 helper fxns, one to check if two trees are the same (sameTree problem solution) and dfs
2.) in dfs helper, use isSameTree as conditional to confirm there is a subtree in the tree
3.) return false if dfs hits null
4.) return the result of this dfs on root
*/

var isSubtree = function(root, subRoot) {
    var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q) || (p.val !== q.val)) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };

    var dfs = function (node) {
        if (!node) return false;
        if (isSameTree(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};


/*
BFS:
1.) use the same sameTree helper fxn as DFS
2.) in bfs , return true if the sameTree helper is true
3.) continue the bfs otherwise
4.) return false at the end of the bfs because subTree was not present
*/

var isSubtree = function(root, subRoot) {
    var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q) || (p.val !== q.val)) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };

    const queue = [root];

    while (queue.length) {
        const curr = queue.pop();
        if (!curr) continue;
        if (isSameTree(curr, subRoot)) return true;
        queue.push(curr.left, curr.right);
    }

    return false;
};
