function lengthOfLongestSubstring(s) {
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
}