/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const total = nums.reduce((a, b) => a + b, 0); // the total is the sum of such array 
  let sum = 0; // the total sum of the left elements & the total sum of the right elements at i: total - nums[i] - sum;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) { //  when the sum of the total elements from the left === the right counterpart
      return i
    }
    sum += nums[i]
  }
  return -1;
}