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
