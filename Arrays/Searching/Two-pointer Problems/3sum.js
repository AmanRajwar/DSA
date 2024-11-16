/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
 */


var threeSum = function (nums) {
    let start = 0;
    let left = 1;
    let right = nums.length - 1;
    const ans = []
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                const temp = [nums[i], nums[j], nums[k]]
                ans.push(temp);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            }
        }
    }
    return ans;

};

// Leet code link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Time Complexity: O(n2)
// Space Complexity: 

