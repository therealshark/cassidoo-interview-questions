import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

import { findAnagrams } from "./index.js";

suite("Find Anagrams", () => {
  test("Example 1", () => {
    assert.deepEqual(findAnagrams("cbaebabacd", "abc"), [0, 6]);
  });

  test("Example 2", () => {
    assert.deepEqual(findAnagrams("fish", "cake"), []);
  });
  test("Example 3", () => {
    assert.deepEqual(findAnagrams("abab", "ab"), [0, 1, 2]);
  });
});
