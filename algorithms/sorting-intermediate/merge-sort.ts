import { merge } from "../sorting/auxiliary.ts";

function mergeSort(array: Array<number>): Array<number> {
    // Base case: If the array has 1 or 0 elements, it is already sorted
    if (array.length <= 1) return array;

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    // Merge the sorted halves
    return merge(left, right);
}


if (import.meta.main) {
    // Generate an array of 100_000_000 random integers to sort
    // const array = Array.from({ length: 10_000_000 }, () => Math.floor(Math.random() * 10_000_000));

    const array = [64, 34, 25, 12, 22, 11, 90];

    console.time("Merge Sort");
    console.log(mergeSort(array));
    console.timeEnd("Merge Sort");
}