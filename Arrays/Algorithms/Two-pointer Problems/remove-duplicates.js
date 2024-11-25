var removeDuplicates = function (nums) {

    let first = 0;
    let second = 1;
    const n = nums.length
    let index = 1
  

    for ( let i=1; i< n ;i++){
        const check = nums[first];
        if(nums[i] != nums[i-1]){
           nums[index] = nums[i]
           index++;
        }

    }
    return index;


};

// Leet code link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Time Complexity: O(n)
// Space Complexity: O(1)