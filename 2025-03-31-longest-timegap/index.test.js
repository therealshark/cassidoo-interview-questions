import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

import { findLongestTimeGap } from "./index.js";

suite("Longest Timegap", () => {
  test("Example 1", () => {
    assert.equal(findLongestTimeGap(["12:00"]), 0);
  });

  test("Example 2", () => {
    assert.equal(findLongestTimeGap(["09:00", "11:00"]), 120);
  });
  test("Example 3", () => {
    assert.equal(findLongestTimeGap(["14:00", "09:00", "15:00", "10:30"]), 210);
  });
  test("Example 4", () => {
    assert.equal(findLongestTimeGap(["08:00", "10:00", "10:00", "14:00"]), 240);
  });
});
