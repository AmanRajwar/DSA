// TimeComplexity = O(n2)


class Solution {
    insert(arr, i) {
        // code here such that insertionSort() sorts arr[]
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    //Function to sort the array using insertion sort algorithm.
    insertionSort(arr, n) {
        //code here
        for (let i = 1; i < arr.length; i++) {

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            this.insert(arr, i)
        }

    }
}