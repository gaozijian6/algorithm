function reverse(x) {
    // 32位有符号整数的范围
    const INT_MIN = -Math.pow(2, 31);  // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
    
    // 处理符号
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    let result = 0;
    while (x !== 0) {
        // 提取最后一位数字
        const digit = x % 10;
        x = Math.floor(x / 10);
        
        // 检查是否会溢出
        // 如果 result > INT_MAX / 10，那么 result * 10 肯定会溢出
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return 0;
        }
        
        result = result * 10 + digit;
    }
    
    // 应用符号
    result *= sign;
    
    // 最终检查范围
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }
    
    return result;
}