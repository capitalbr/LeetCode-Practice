// LEETCODE QUESTION

// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

//   Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n - 1 else return false.
//   Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

//     Example 1:

// Input: [1, 2, 3, 4, 5]
// Output: true
// Example 2:

// Input: [5, 4, 3, 2, 1]
// Output: false

//------------------------------------------------------------------------------

// MY ANSWER EXPLANATION

// keep up with the smallest streak of 2
// if an ele is smaller than the first and you replace it it's ok to keep the 
// mid the one that came before it because next time the conditional will either
// replace mid if the ele is lower, or return true if it's larger because if it's
// larger than any mid then that means it must be the third in a streak of 3

let increasingTriplet = (nums) => {
  if (!nums || nums.length < 3) return false;
  let first = nums[0], mid = Infinity;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] > first && nums[i] < mid) mid = nums[i];
    if (nums[i] < first) first = nums[i]
    if (nums[i] > mid) return true;
  }
  return false;
};

console.log(increasingTriplet([4,7,1,2,3]));