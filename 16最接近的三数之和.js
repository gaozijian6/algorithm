function threeSumClosest(nums, target) {
    // 首先对数组进行排序
    nums.sort((a, b) => a - b);
    
    let closestSum = nums[0] + nums[1] + nums[2]; // 初始化最接近的和
    let minDiff = Math.abs(closestSum - target); // 初始化最小差值
    
    // 外层循环，固定第一个数
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; // 左指针
        let right = nums.length - 1; // 右指针
        
        // 使用双指针技术
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            let currentDiff = Math.abs(currentSum - target);
            
            // 如果当前和更接近目标值，更新结果
            if (currentDiff < minDiff) {
                minDiff = currentDiff;
                closestSum = currentSum;
            }
            
            // 如果当前和等于目标值，直接返回
            if (currentSum === target) {
                return currentSum;
            }
            // 如果当前和小于目标值，移动左指针
            else if (currentSum < target) {
                left++;
            }
            // 如果当前和大于目标值，移动右指针
            else {
                right--;
            }
        }
    }
    
    return closestSum;
}

// 测试用例
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 输出: 2
console.log(threeSumClosest([0, 0, 0], 1)); // 输出: 0
console.log(threeSumClosest([1, 1, 1, 0], -100)); // 输出: 2