/**
 * 在旋转排序数组中搜索目标值
 * @param {number[]} nums - 旋转后的排序数组
 * @param {number} target - 要查找的目标值
 * @return {number} - 目标值的下标，若不存在则返回-1
 */
function search(nums, target) {
  if (nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;

    // 找到目标值
    if (nums[mid] === target) {
      return mid;
    }

    // 判断mid是在左半部分还是右半部分
    if (nums[left] <= nums[mid]) {
      // mid在左半部分
      if (nums[left] <= target && target < nums[mid]) {
        // 目标值在左半有序部分
        right = mid - 1;
      } else {
        // 目标值在右半部分
        left = mid + 1;
      }
    } else {
      // mid在右半部分
      if (nums[mid] < target && target <= nums[right]) {
        // 目标值在右半有序部分
        left = mid + 1;
      } else {
        // 目标值在左半部分
        right = mid - 1;
      }
    }
  }

  return -1; // 未找到目标值
}

console.log(search([4,5,6,7,0,1,2], 0)); // 预期输出: 4