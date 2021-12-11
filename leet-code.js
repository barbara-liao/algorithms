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
