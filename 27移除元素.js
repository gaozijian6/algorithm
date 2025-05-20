function removeElement(nums, val) {
    // 使用双指针
    let k = 0; // k 指针指向下一个需要填入的位置
    
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 如果当前元素不等于 val，则保留
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k; // 返回不等于 val 的元素数量
}