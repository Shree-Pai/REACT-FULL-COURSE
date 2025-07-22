function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxlen = 0;

    for (let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxlen=Math.max(maxlen,right-left+1);
    }

    return maxlen;
}

console.log(lengthOfLongestSubstring("abac"));
