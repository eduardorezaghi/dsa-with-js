import { swap } from "./auxiliary.ts";

function bubbleSort(arr: Array<number>): Array<number> {
    // Outer loop to control the number of passes
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true; // Flag to detect if any swaps were made

        // Inner loop to compare adjacent elements
        for (let j = 0; j < i - 1; j++) {
            const current = arr[j];
            const next = arr[j + 1];

            if (current > next) {
                // Use the index of the elements to swap them
                swap(arr, j, j + 1);
                noSwaps = false; // Set the flag to false if a swap is made
            }
        }

        // If no swaps were made during the pass, the array is sorted
        if (noSwaps) break;
    }

    return arr;
}

if (import.meta.main) {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Original array: ", arr);
    console.log("Sorted array: ", bubbleSort(arr));

    const nearlySortedArr = [2, 3, 8, 5, 6];
    console.log("Original array: ", nearlySortedArr);
    console.log("Sorted array: ", bubbleSort(nearlySortedArr));
}
