// 1st possibility - with naive approach, sort then look up kth element - too slow
// 2nd possibility - priority queue - not efficient enough
// 3rd possibility - selection algorithm (based on the partion method)



// QUICK SEARCH  >> next will implement partition helper to get O(1) space complexity
// Time: O(N)
// Space: O(N) because I didn't mutate the input
// O(N) time because you cut the input on average in half each time with randomized
// pivot makes it O(N) because even though you are doing log N iterations each
// workload is decreased by a factor of two. 
// O(N + N-1 + N-2 ... to infinity) === 2N.  So it's O(2N) or O(N);
const randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

var findKthLargest = function (nums, k) {
  let arr = nums.slice(0);
  while (true) {
    let pivot = arr[randomNum(arr.length)];
    let left = [];
    let right = [];
    arr.forEach((ele, idx) => {
      if (ele < pivot) {
        left.push(ele);
      } else if (ele >= pivot && arr.indexOf(pivot) !== idx) {
        right.push(ele);
      }
    })
    if (left.length === arr.length - k) return pivot;
    if (left.length > arr.length - k) {
      arr = left;
      k -= right.length + 1;
    } else {
      arr = right;
    }
  }
};

console.log(`quick search     ${findKthLargest([3, 2, 1, 5, 6, 4], 2)}`);



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

var findKthLargestNaive = function (nums, k) {
  return merge(nums)[nums.length - k];
};

console.log(`naive sort       ${findKthLargestNaive([3, 2, 1, 5, 6, 4], 2)}`);