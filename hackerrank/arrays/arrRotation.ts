function rotLeft(arr: Array<any>, rotations: number) {
    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }

    return arr;
}

if (import.meta.main) {
    const arr: Array<any> = [1, 2, 3, 4, 5];
    const rotations: number = 4;

    const result = rotLeft(arr, rotations);
    console.log(result); // Expected output: [5, 1, 2, 3, 4]

    const result2 = rotLeft([1,2,3,4,5], 2);
    console.log(result2); // Expected output: [3, 4, 5, 1, 2]
}