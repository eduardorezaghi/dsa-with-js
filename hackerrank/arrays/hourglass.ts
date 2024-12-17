/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr: number[][]): number {
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                          + arr[i + 1][j + 1]
                          + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

if (import.meta.main) {
    const arr: number[][] = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    const result = hourglassSum(arr);
    console.log(result); // Expected output: 19
}