// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in -place.

//   Example 1:

// Input:
// [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]
// Output:
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]
// Example 2:

// Input:
// [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ]
// Output:
// [
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution ?

//------------------------------------------------------------------------------


// MY SOLUTION:  O(m*n) time, O(m+n) space
// worst case scenario my two objects will use O(m+n) space.
// OPTIMIZATION: don't use objects and keep track of rows / columns with flags
// you set within the original matrix when a 0 is hit.  Flags will be at the
// beggining of the row and column where the 0 was located, 
// giving me constant space 0(1) and 0(m*n) time;

var setZeroes = function (matrix) {
  columnsWithZero = {}; // row idx's that need a zero
  rowsWithZero = {};  // entire rows that need zeroes
  matrix.forEach((row, idx) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        rowsWithZero[idx] = true;
        columnsWithZero[i] = true;
      }
    }
  })
  matrix.forEach((row, idx) => {
    if (rowsWithZero[idx]) {
      for (let i = 0; i < row.length; i++) {
        row[i] = 0;
      }
    } else {
      for (let i = 0; i < row.length; i++) {
        if (columnsWithZero[i]) {
          row[i] = 0;
        }
      }
    }
  })

  return matrix;


};