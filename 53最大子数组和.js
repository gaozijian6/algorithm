function maxSubArray(nums) {
    // 边界情况：空数组
    if (nums.length === 0) return 0;
    
    // 当前子数组和
    let currentSum = nums[0];
    // 全局最大子数组和
    let maxSum = nums[0];
    
    // 从第二个元素开始遍历
    for (let i = 1; i < nums.length; i++) {
        // 当前位置有两个选择：
        // 1. 加入前面的子数组
        // 2. 自己另起一个新的子数组
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // 更新全局最大和
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 预期输出: 6 (子数组 [4,-1,2,1])