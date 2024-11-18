/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let n = nums.length
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }

    }
    return nums
};

// Leet code Link = https://leetcode.com/problems/sort-an-array/fadfd
// Time Complexity: O(n2)
// Auxiliary Space: O(1)