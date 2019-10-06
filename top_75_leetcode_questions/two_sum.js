// Used hash table to improve run time complexity, we reduce look up time from
// O(n) to O(1) but with that comes added space.
// Time: O(n) 
// Space: O(n)

const twoSum = (nums, target) => {
  let table = {};
  // no need to loop twice we can add to the hash table as we go
  // and compare to prior additions improving runtime from O(2n) to O(n)
  for (let i = 0; i < nums.length; i++) {
    let counterpart = target - nums[i]
    if (table[counterpart] !== undefined) return [table[counterpart], i];  // i will be second in the output since comparing to items behind it in the array
    // no need to add condition to check if table[other] === i now that we aren't even
    // adding it to the table until after the comparison.
    table[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));