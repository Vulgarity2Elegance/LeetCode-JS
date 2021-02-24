/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  // 创建 MAP
  const MAP = new Map();
  // 由于第一个元素在它之前一定没有元素与之匹配，所以先存入哈希表
  MAP.set(nums[0], 0);
  for (let i = 1; i < len; i++) {
      // 提取共用
      let other = target - nums[i];
      // 判断是否符合条件，返回对应的下标
      if (MAP.get(other) !== undefined) return [MAP.get(other), i];
      // 不符合的存入hash表
      MAP.set(nums[i], i)
  }
};
