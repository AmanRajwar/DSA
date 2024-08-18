// Time complexity = O(n2)

class Solution {
    // Method to find the index of the minimum element in the subarray starting from index i
    select(arr, i) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        return min;
    }

    // Function to sort the array using selection sort algorithm
    selectionSort(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            // Find the index of the minimum element in the subarray starting from index i
            let ind = this.select(arr, i);

            // Swap the current element with the found minimum element
            let temp = arr[i];
            arr[i] = arr[ind];
            arr[ind] = temp;
        }
    }
}
