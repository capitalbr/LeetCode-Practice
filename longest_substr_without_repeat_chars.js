// I could have kept up where the last occurance of a letter was with my table
// then simple calculate the length of that range being the difference between
// indexes.
// I could have used Array.prototype.reduce to simplify and non longer need the
// range variable


// time complexity isn't O(n) because I reset j to i+1
// could easily refactor as explained above to calculate difference based
// on index in table of last occurance of letter.  Then could iterate just once.

var lengthOfLongestSubstring = function (s) {
  if (typeof s !== "string" || s.length === 0) return 0;
  if (s.length === 1) return 1;

  let length = 0, range = 0, table = {};

  for (let i = 0, j = 0; j < s.length; j++) {
    if (!table[s[j]] && table[s[j]] !== 0) {
      table[s[j]] = j;
      length += 1;
      if (range < length) range = length;
    } else {
      i = table[s[j]] + 1;
      j = i - 1;
      length = 0;
      table = {}
    }
  }

  return range;
};


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("aab"))