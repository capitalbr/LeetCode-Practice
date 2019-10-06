// GET SUM WITHOUT USING OPERATORS + OR -.
// MUST USE BITWISE OPERATORS.

// Bitwise operator '^' will set place to '1' if one of two are a '1'.  
//        - This accounts for all addition that has a sum of < 10.
//        - Will store this in variable 'a'.
// Bitwise operator '&' will find any place where both digits are '1' which is a ten.
// Bitwise operator '<<' will shift the binary over by one place adding a tens place.
//        - Will use variable 'b' to store this new result which will be absorbed into
//          variable 'a' on the next loop if the corresponding place in 'a' is zero.
// If not it will get caught by variable b again.
// The process continues until 'b' has been shifted over completely to zero.
// Then simply return 'a'. 

var getSum = function (a, b) {
  while (b !== 0) {
    let temp = a;
    // does addition for everything that won't result in a ten
    // with each loop any tens from var b get moved to a
    a = a ^ b;
    // every addition resulting in 10 gets stored here and shifted over one place
    b = (temp & b) << 1;
  }
  return a;
};

console.log(getSum(2, 3));  // 5
console.log(getSum(8, 9));  // 17
console.log(getSum(54, 88));// 142