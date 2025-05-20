
function searchRange(nums, target) {
    // 初始化结果为[-1, -1]
    const result = [-1, -1];
    
    // 边界情况：空数组
    if (nums.length === 0) return result;
    
    // 查找左边界（第一个出现的位置）
    result[0] = findLeftBound(nums, target);
    
    // 如果左边界不存在，则右边界也不存在
    if (result[0] === -1) return result;
    
    // 查找右边界（最后一个出现的位置）
    result[1] = findRightBound(nums, target);
    
    return result;
}

function findLeftBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftBound = -1;
    
    while (left <= right) {
        const mid = (left + right) >> 1;
        
        if (nums[mid] === target) {
            // 找到目标值，记录位置并继续向左查找
            leftBound = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            // 目标值在右侧
            left = mid + 1;
        } else {
            // 目标值在左侧
            right = mid - 1;
        }
    }
    
    return leftBound;
}

function findRightBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightBound = -1;
    
    while (left <= right) {
        const mid = (left + right) >> 1;
        
        if (nums[mid] === target) {
            // 找到目标值，记录位置并继续向右查找
            rightBound = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            // 目标值在右侧
            left = mid + 1;
        } else {
            // 目标值在左侧
            right = mid - 1;
        }
    }
    
    return rightBound;
}

console.log(searchRange([5,7,7,8,8,10], 8)); // 预期输出: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // 预期输出: [-1, -1]