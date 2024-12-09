function searchIndex(item: any, array: Array<any>): number | boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }

    return -1;
}


if (import.meta.main) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(searchIndex(5, array)); // 4
    console.log(searchIndex(10, array)); // false

    // United States states
    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];
    console.log(searchIndex("Nevada", states)); // 27
    console.log(searchIndex("Canada", states)); // false
}
