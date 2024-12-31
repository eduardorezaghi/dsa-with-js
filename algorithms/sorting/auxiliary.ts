export function swap(arr: Array<number>, i: number, j: number) {
    console.log("Swapping: ", arr[i], arr[j]);
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function merge(left: Array<number>, right: Array<number>): Array<number> {
    const result = [];
    let i = 0;
    let j = 0;

    // Iterate over the left and right arrays and merge them into the result array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements of the left and right arrays
    return result.concat(left.slice(i), right.slice(j));
}