function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    // tails[i] 表示长度为 i+1 的递增子序列的最小尾部元素
    const tails = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;
        
        // 二分查找第一个 >= num 的位置
        while (left < right) {
            const mid = (left + right) >> 1;
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // 如果 left === tails.length，说明 num 比所有元素都大
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 输出: 4 ([2,3,7,18])