function isValid(s) {
    // 如果字符串长度为奇数，肯定不匹配
    if (s.length % 2 !== 0) {
        return false;
    }
    
    // 创建栈来存储左括号
    const stack = [];
    
    // 创建括号映射表
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // 遍历字符串中的每个字符
    for (let char of s) {
        // 如果是左括号，入栈
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // 如果是右括号
        else if (char === ')' || char === '}' || char === ']') {
            // 如果栈为空或者栈顶元素与当前右括号不匹配
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }
    
    // 最终栈应该为空，表示所有括号都匹配
    return stack.length === 0;
}