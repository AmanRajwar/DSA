// iterative approach 
var search = function (nums, target) {
    let start = 0;
    let end = nums.length;
    let mid;
    let ans = -1;
    console.log(mid)

    while (end > start) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            return ans = mid
        }
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};

// recursive approach 
var search = function (nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid;
    let ans = helper(start, end, nums, target);
    return ans;
};

const helper = (start, end, nums, target) => {
    if (start > end) return -1;

    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target)
        return mid
    if (nums[mid] > target)
        return helper(start, mid-1 , nums, target)
    else
        return helper(mid+1 , end, nums, target)
}


// leet code link  = https://leetcode.com/problems/binary-search/
// time complexity  = O(log n)

