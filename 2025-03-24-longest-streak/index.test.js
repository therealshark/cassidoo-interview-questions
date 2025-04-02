import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

import { findLongestStreak } from "./index.js";

suite("Longest Timegap", () => {
  test("Example 1", () => {
    assert.equal(
      findLongestStreak([true, true, false, true, true, true], 3),
      3
    );
  });

  test("Example 2", () => {
    assert.equal(findLongestStreak([true, true, true, false, true], 4), 0);
  });
  test("Example 3", () => {
    assert.equal(findLongestStreak([true, true, true, true], 2), 4);
  });
});
