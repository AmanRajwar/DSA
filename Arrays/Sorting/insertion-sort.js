/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let n = nums.length
    for (let i = 1; i < n; i++) {
        let key = nums[i]
        let j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key
    }

return nums
};

// Leet code Link = https://leetcode.com/problems/sort-an-array/fadfd
// Time Complexity: O(n2)
// Auxiliary Space: O(1)