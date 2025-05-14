function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";
    
    // 找到最短的字符串长度
    let minLength = Math.min(...strs.map(str => str.length));
    
    for (let i = 0; i < minLength; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0].substring(0, minLength);
}