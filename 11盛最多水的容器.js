function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // 计算当前容器的水量
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentWater = width * currentHeight;
        
        // 更新最大水量
        maxWater = Math.max(maxWater, currentWater);
        
        // 移动较短的线的指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}