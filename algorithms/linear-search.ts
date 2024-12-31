/**
 * Searches for an item in an array and returns its index.
 * @param item - The item to search for.
 * @param array - The array to search within.
 * @returns The index of the item if found, otherwise -1.
 */
function searchIndex(item: any, array: Array<any>): number {
    // Iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element matches the item
        if (array[i] === item) {
            // If a match is found, return the index
            return i;
        }
    }
    // If no match is found, return -1
    return -1;
}

// Check if the script is being run directly
if (import.meta.main) {
    // Define an array of numbers
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Test the searchIndex function with a number that exists in the array
    console.log(searchIndex(5, array)); // 4
    // Test the searchIndex function with a number that does not exist in the array
    console.log(searchIndex(10, array)); // -1

    // Define an array of United States states
    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];
    // Test the searchIndex function with a state that exists in the array
    console.log(searchIndex("Nevada", states)); // 27
    // Test the searchIndex function with a state that does not exist in the array
    console.log(searchIndex("Canada", states)); // -1
}
