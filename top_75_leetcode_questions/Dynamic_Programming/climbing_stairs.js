
// PROBLEM:   How many different path possibilities to land on the last step if 
//            you can take either one or two steps at each step.
// EXPLANATION:  
//            It's basically the fibonacci sequence so most solutions are going
//            to involve using two subproblems that sum to N.
// NAIVE APPROACH - WITHOUT MEMO:  
//            Time: O(2^N) because each level doubles amount of recursive calls
//                and calls are dependent on N.
//            Space: O(n) because can only recurse a maximum the length of n in
//            the case that each step is 1.
// SOLUTION - MEMO: 
//            Time: O(N) because no repeated calculations time is based on size
//                of possible unique step paths.
//                Every time an amount of N is returned it is stored in the MEMO.
//                Many step combinations will resuse portions of each others paths so storing 
//                all the paths in a table you get O(1) access to the momoized paths saving
//                a lot of time.
//            Space: O(N) because nothing has changed here.

// ALTERNATIVES: 1) dynamic programming using temp variables to get space complexity of O(1);
//               2) Binets Method- Matrix multiplication Time: O(log n) Space: O(1)
//               3) Fibonacci Formula - Time: O(log n) Space: O(1)


var climbStairs = function (n) {
  function climb(count, n, memo = {}) {
    if (count > n) return 0;
    if (count === n) return 1;
    if (memo[count]) return memo[count];
    memo[count] = climb(count + 1, n, memo) + climb(count + 2, n, memo);
    return memo[count];
  }
  return climb(0, n);
};

console.log(climbStairs(44));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));


