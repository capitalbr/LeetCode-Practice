// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.The binary tree has the following definition:

// struct Node {
//   int val;
//   Node * left;
//   Node * right;
//   Node * next;
// }
// Populate each next pointer to point to its next right node.If there is no next right node, the next pointer should be set to NULL.

//   Initially, all next pointers are set to NULL.


/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */

// -----------------------------------------------------------------------------

// MY SOLUTION

// DFS - recursive - very simple straight forward assignments for each call;
// Time: O(n)
// Space: O(1) 


var connect = function (root) {
  if (!root || !root.left) return root;

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);
  return root;
};