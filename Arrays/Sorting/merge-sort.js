
var sortArray = function (nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

const mergeSort = (arr, left, right) => {
    if (left >=right) {
        return;
    }
    let mid = Math.floor(left + (right - left) / 2)

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

const merge = (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i]
    }
    for (let i = 0; i < n2; i++) {
        R[i] = arr[mid + i +1]
    }

    let i = 0;
    let j = 0;
    let k = left

    while (i < n1 && j < n2) {
        if (L[i] >= R[j]) {
            arr[k] = R[j]
            j++
        } else {
            arr[k] = L[i]
            i++
        }
        k++
    }

    while(i<n1){
        arr[k] = L[i];
        i++;
        k++
    }
     while(j<n2){
        arr[k] = R[j];
        j++;
        k++
    }
}