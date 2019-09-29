// PROBLEM:  https://leetcode.com/problems/redundant-connection/
// DESCRIPTION:  Dynamic connectivity problem.  I must return the edge [m, n]
//               nearest to the end of the input that is a redundant connection.
//               meaning they are already connected through some other node(s). 
// SOLUTION:  Union Find Algorithm Implementation
// OPTIMIZATION: Path compression and Weighted Connection to speed up findRoot;


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
let isConnected = (i, edges, array) => {
  return (
    findRoot(edges[i][0], array) === findRoot(edges[i][1], array)
  )
}

let findRoot = (node, array) => {
  let potentialBase = array[node];
  while (potentialBase !== node) {
    let temp = potentialBase;
    potentialBase = array[potentialBase];
    node = temp;
  }
  return potentialBase;
}

var findRedundantConnection = function (edges) {
  let array = [];
  let redundantConnection;
  array = edges.map((edge, idx) => {
    return idx;
  });

  array[array.length] = array.length;


  for (let i = 0; i < edges.length; i++) {
    if (isConnected(i, edges, array)) {
      redundantConnection = edges[i];
    } else {
      let rootOne = findRoot(edges[i][1], array);
      let rootZero = findRoot(edges[i][0], array);
        array[rootOne] = rootZero;
    }
  }
  return redundantConnection;
};


console.log(findRedundantConnection([[2, 5], [1, 3], [3, 5], [2, 3], [1, 6], [2, 5], [1, 7]]));
console.log(findRedundantConnection([[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]));
