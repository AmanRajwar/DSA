var containsNearbyDuplicate = function (nums, k) {
    let ans = false;
    let n = nums.length;
    let seen = new Set()

    for (let i = 0; i < n; i++) {

        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
        if (seen.size > k) {
            seen.delete(nums[i-k])
        }
    }
    return false

};

// Leet code link : https://leetcode.com/problems/contains-duplicate-ii/
// Time Complexity: O(n)
// Space Complexity: O(k)