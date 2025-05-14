/**
 * 找出所有和为0的不重复三元组
 * @param {number[]} nums - 整数数组
 * @return {number[][]} 包含所有满足条件的三元组的数组
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}

// 测试示例
function testThreeSum() {
  // 测试用例1
  const nums1 = [-1, 0, 1, 2, -1, -4];
  console.log("输入:", nums1);
  console.log("输出:", threeSum(nums1));
  // 预期输出: [[-1, -1, 2], [-1, 0, 1]]

  // 测试用例2
  const nums2 = [0, 1, 1];
  console.log("输入:", nums2);
  console.log("输出:", threeSum(nums2));
  // 预期输出: []

  // 测试用例3
  const nums3 = [0, 0, 0];
  console.log("输入:", nums3);
  console.log("输出:", threeSum(nums3));
  // 预期输出: [[0, 0, 0]]
}

// 运行测试
testThreeSum();
