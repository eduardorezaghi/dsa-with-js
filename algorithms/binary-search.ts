function binarySearch(item: number, array: Array<number>) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middleIndex = Math.floor((right + left) / 2);
        const middle = array[middleIndex];
        
        console.log(`left: ${left}, right: ${right}`);
        if (item === middle) {
            return middleIndex;
        } else if (item > middle) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }

    return false;
}

function r_binarySearch(array: Array<any>, item: any, start: number = 0, end: number = array.length - 1): number | boolean {
    if (start > end) {
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
        return middle;
    }
    else if (array[middle] > item) {
        return r_binarySearch(array, item, start, middle - 1);
    }

    return r_binarySearch(array, item, middle + 1, end);
}


if (import.meta.main) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(binarySearch(5, array)); // 4
    console.log(binarySearch(7, array)); // bad case
    console.log(binarySearch(10, array)); // false
    console.log();
    console.log("Recursive implementation");
    console.log(r_binarySearch(array, 5)); // 4
    console.log(r_binarySearch(array, 7)); // bad case
    console.log(r_binarySearch(array, 10)); // -1
}   