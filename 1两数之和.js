function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// 测试
const nums = [2, 7, 11, 15];
const target = 18;
console.log(twoSum(nums, target)); // 输出: [0, 1]
