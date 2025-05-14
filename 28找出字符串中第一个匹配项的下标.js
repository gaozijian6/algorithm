function strStr(haystack, needle) {
    // 边界条件：如果needle为空字符串，返回0
    if (needle === '') return 0;
    
    // 如果needle长度大于haystack，不可能匹配
    if (needle.length > haystack.length) return -1;
    
    // 遍历haystack，寻找匹配的起始位置
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // 检查从位置i开始是否能完全匹配needle
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    
    return -1;
}

// 测试用例
console.log(strStr("sadbutsad", "sad"));      // 输出: 0
console.log(strStr("leetcode", "leeto"));     // 输出: -1
console.log(strStr("hello", "ll"));          // 输出: 2
console.log(strStr("", ""));                 // 输出: 0
console.log(strStr("a", "a"));               // 输出: 0