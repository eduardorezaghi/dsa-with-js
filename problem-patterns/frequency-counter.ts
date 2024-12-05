export function validAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length) {
        return false;
    }
    const frequencyCounter1: Record<string, number> = {};
    const frequencyCounter2: Record<string, number> = {};

    for (const char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for (const char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    if (frequencyCounter1.length !== frequencyCounter2.length) {
        return false;
    }

    for (const key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;

}

if (import.meta.main) {
    console.log(validAnagram("anagram", "nagaram"));
    console.log(validAnagram("rat", "car"));
    console.log(validAnagram("awesome", "awesom"));
    console.log(validAnagram("qwerty", "qeywrt"));
    console.log(validAnagram("texttwisttime", "timetwisttext"));
}