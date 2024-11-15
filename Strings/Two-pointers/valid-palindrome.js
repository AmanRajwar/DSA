var isPalindrome = function (s) {
    let result = ''

    for (let index in s) {
        let curr = s[index]
        if ((curr >= 'a' && curr <= 'z') || 
        (curr >= 'A' && curr <= 'Z') || 
        (curr >= '0' && curr <= '9')) {
            curr = curr.toLowerCase()
            result += curr;
        }
    }

    let left = 0;
    let right = result.length - 1;
    while (left < right) {
        if (result[left] != result[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
};

//Time complexity : O(n)
// Leet code link : https://leetcode.com/problems/valid-palindrome/