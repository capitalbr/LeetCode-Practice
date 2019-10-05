// 1st solution - with naive approach, sort then look up kth element
// 2nd solution - priority queue
// 3rd solution - selection algorithm (based on the partion method)


// NAIVE APPROACH SORT FIRST THEN LOOK UP
// Time Complexity: 0(N lg N)

const merge = (array) => {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);

  let left = merge(array.slice(0, mid));
  let right = merge(array.slice(mid));

  return merged(left, right);
}

const merged = (left, right) => {
  let merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
}

var findKthLargest = function (nums, k) {

  return merge(nums)[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));