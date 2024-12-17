function checkMagazine(magazine: string[], note: string[]): void {
    const wordsInMagazine: Record<string, number> = {};
    const wordsInRansomNote: Record<string, number> = {};

    if (note.length > magazine.length) {
        console.log('No');
        return;
    }

    note.forEach(element => wordsInRansomNote[element] = 0 );
    magazine.forEach(word => wordsInMagazine[word] = 0 );

    note.forEach(element => wordsInRansomNote[element] += 1 );
    magazine.forEach(word => wordsInMagazine[word] += 1 );

    for (const word in wordsInRansomNote) {
        if (!wordsInMagazine[word]) {
            console.log('No');
            return;
        }

        if (wordsInMagazine[word] < wordsInRansomNote[word]) {
            console.log('No');
            return;
        }
    }

    console.log('Yes');
}

if (import.meta.main) {
    const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
    const note = ['give', 'one', 'grand', 'today'];

    checkMagazine(magazine, note); // Expected output: Yes

    const magazine2 = ['two', 'times', 'three', 'is', 'not', 'four'];
    const note2 = ['two', 'times', 'two', 'is', 'four'];

    checkMagazine(magazine2, note2); // Expected output: No
}