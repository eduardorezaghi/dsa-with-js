import { swap } from "./auxiliary.ts";

function selectionSort(array: number[]): number[] {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) swap(array, i, minIndex);
  }

  return array;
}

if (import.meta.main) {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Original array: ", arr);
    console.log("Sorted array: ", selectionSort(arr));

    const nearlySortedArr = [2, 3, 8, 5, 6];
    console.log("Original array: ", nearlySortedArr);
    console.log("Sorted array: ", selectionSort(nearlySortedArr));
}
