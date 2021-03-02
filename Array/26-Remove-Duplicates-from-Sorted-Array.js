/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 慢指针初始为0;
  let k = 0;
  // 循环中的变量i是快指针
  for (let i = 0; i < nums.length; i++) {
    // 如果 快慢指针指向的元素不同
    if(nums[i] !== nums[k]) {
      // 慢指针++; 快指针是 循环变量每次都会自增，不需要单独操作
      k++;
      // 将快指针 指向的元素覆盖慢指针当前的元素
      nums[k] = nums[i]
    }
  }
  return k+1;
};