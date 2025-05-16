function removeDuplicates(nums) {
    // 边界情况：空数组
    if (nums.length === 0) return 0;
    
    // slow指针指向当前唯一元素的位置
    let slow = 0;
    
    // fast指针遍历数组
    for (let fast = 1; fast < nums.length; fast++) {
        // 如果发现不同的元素
        if (nums[fast] !== nums[slow]) {
            // 将slow指针向前移动
            slow++;
            // 将不同的元素放到slow位置
            nums[slow] = nums[fast];
        }
    }
    
    // 返回唯一元素的个数
    return slow + 1;
}