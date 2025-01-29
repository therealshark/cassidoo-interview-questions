import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

import { groupAnagrams } from "./index.js";

suite("Sort Anagrams", () => {
  test("Example 1", () => {
    assert.deepEqual(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
      [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    );
  });

  test("Example 2", () => {
    assert.deepEqual(groupAnagrams(["vote", "please"]), [["vote"], ["please"]]);
  });
  test("Example 3", () => {
    assert.deepEqual(groupAnagrams(["debitcard", "badcredit"]), [
      ["debitcard", "badcredit"],
    ]);
  });
});
