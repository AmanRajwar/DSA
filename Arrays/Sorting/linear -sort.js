
var sortArray = function (nums) {
    let n = nums.length
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (nums[min_idx] > nums[j]) {
                min_idx = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[min_idx];
        nums[min_idx] = temp;
    }
    return nums
};

