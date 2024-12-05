import { assertEquals } from "jsr:@std/assert";
import { validAnagram } from "./frequency-counter.ts";

Deno.test("validAnagram", () => {
    assertEquals(validAnagram("", ""), true);
    assertEquals(validAnagram("aaz", "zza"), false);
    assertEquals(validAnagram("anagram", "nagaram"), true);
    assertEquals(validAnagram("rat", "car"), false);
    assertEquals(validAnagram("awesome", "awesom"), false);
    assertEquals(validAnagram("qwerty", "qeywrt"), true);
    assertEquals(validAnagram("texttwisttime", "timetwisttext"), true);
});