import { swap } from "./auxiliary.ts";

function insertionSort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
        // Start checking the sorted portion of the array
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            swap(array, j, j - 1);
        }
    }
    return array;
}

if (import.meta.main) {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Original array: ", arr);
    console.log("Sorted array: ", insertionSort(arr));

    const nearlySortedArr = [2, 3, 8, 5, 6];
    console.log("Original array: ", nearlySortedArr);
    console.log("Sorted array: ", insertionSort(nearlySortedArr));
}