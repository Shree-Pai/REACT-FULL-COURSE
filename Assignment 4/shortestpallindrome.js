function shortestPalindrome(s){
    let n = s.length;
    let left = 0;
    let right = n - 1;
    while(left < right){
        if(s[left] == s[right]){
            left++;
            right--;
            return s;
        } else {
            left = 0;
            right--;
        }
    }
    let f = s.substring(right + 1);
    let first = f.split('').reverse().join('');
    return first + s;
}

console.log(shortestPalindrome("tess"));
console.log(shortestPalindrome("bob"));
