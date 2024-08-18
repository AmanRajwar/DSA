// TimeComplexity = O(n2)

class Solution {
    // Function to sort the array using bubble sort algorithm
    bubbleSort(arr, n) {
        for (let i = n - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
