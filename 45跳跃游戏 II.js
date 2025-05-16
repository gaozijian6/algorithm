function jump(nums) {
    if (nums.length <= 1) return 0;
    
    let jumps = 0;          // 跳跃次数
    let currentEnd = 0;     // 当前跳跃能到达的最远位置
    let farthest = 0;       // 目前为止能到达的最远位置
    
    // 不需要考虑最后一个元素，因为已经到达终点
    for (let i = 0; i < nums.length - 1; i++) {
        // 更新能到达的最远位置
        farthest = Math.max(farthest, i + nums[i]);
        
        // 如果到达了当前跳跃的边界
        if (i === currentEnd) {
            jumps++;                    // 必须跳跃
            currentEnd = farthest;      // 更新下一跳的边界
            
            // 如果已经能到达终点，可以提前结束
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
}

// 测试用例
console.log(jump([2, 3, 1, 1, 4])); // 输出: 2
console.log(jump([2, 3, 0, 1, 4])); // 输出: 2
console.log(jump([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 输出: 4
console.log(jump([1])); // 输出: 0


