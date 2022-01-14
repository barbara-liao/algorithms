/*
 - loop through array
 - check if the index is equal to the target number
 - if it is, return the index number
 - else return -1
 */

function binarySearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

function removeDuplicates(s) {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (arr.length > 0 && arr[arr.length - 1] === s[i]) {
      arr.pop()
    } else {
      arr.push(s[i])
    }
  }
  return arr.join('');
};

var twoSum = function (nums, target) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const neededNum = target - firstNum;
    if (numsObj[neededNum] !== undefined) {
      return [i, numsObj[neededNum]];
    }
    numsObj[firstNum] = i;
  }
};

var isPalindrome = function (x) {
  const input = x.toString();
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let r = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return r;
    }
    r += strs[0][i];
  }
  return r;
};

var checkAlmostEquivalent = function (word1, word2) {
  let wordOneObj = {};
  let wordTwoObj = {};
  for (let i = 0; i < word1.length; i++) {
    if (!wordOneObj[word1[i]]) {
      wordOneObj[word1[i]] = 1;
    } else {
      wordOneObj[word1[i]]++;
    }

    if (!wordTwoObj[word2[i]]) {
      wordTwoObj[word2[i]] = 1;
    } else {
      wordTwoObj[word2[i]]++;
    }
  }
  for (let key in wordOneObj) {
    if (!wordTwoObj[key]) {
      wordTwoObj[key] = 0;
    }
  }
  for (let key in wordTwoObj) {
    if (!wordOneObj[key]) {
      wordOneObj[key] = 0;
    }
  }
  for (let key in wordOneObj) {
    if (Math.abs(wordOneObj[key] - wordTwoObj[key]) > 3) {
      return false;
    }
  }
  return true;
};

/*
- create storage for output array
- traverse through array
- if the output array is less than n,
    - push the array at i into the array
    - push the array at i + n into the array
- else
    - return output
*/
var shuffle = function(nums, n) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
      if (output.length < n * 2) {
        output.push(nums[i]);
        output.push(nums[i + n]);
        }
    }
    return output;
};
