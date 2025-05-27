function lengthOfLongestSubstring(s) {
<<<<<<< HEAD
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // 如果右指针的字符已经在窗口中，收缩左边界
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // 添加当前字符到集合
        charSet.add(s[right]);
        
        // 更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
=======
    let left=0
    const map=new Map()
    let maxLen=0
    for(let right=0;right<s.length;right++){
        if(map.has(s[right])){
            left=Math.max(map.get(s[right])+1,left)
        }
        map.set(s[right],right)
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen
>>>>>>> f224705c2ba5beb7b993875a416d94c907587006
}