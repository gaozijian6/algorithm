function canJump(nums) {
    let maxReach = 0; // 能达到的最远位置
    
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置超过了能达到的最远位置，说明无法到达
        if (i > maxReach) {
            return false;
        }
        
        // 更新能达到的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 如果能达到或超过最后一个位置，直接返回true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return maxReach >= nums.length - 1;
}