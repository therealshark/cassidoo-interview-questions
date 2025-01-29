import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

import { rollDie, yahtzeeRound, analyzeDice } from "./index.js";

suite("Yahtzee", () => {
  test("Rolling a Die produces numbers between 1 and 6", (t) => {
    for (let i = 0; i < 10_000; i++) {
      const die = rollDie();
      assert(die >= 1 && die <= 6);
    }
  });

  test("Example 1", () => {
    assert.deepEqual(analyzeDice([2, 2, 3, 3, 3]), [
      "twos",
      "threes",
      "full house",
      "three of a kind",
      "chance",
    ]);
  });

  test("Example 2", () => {
    assert.deepEqual(analyzeDice([2, 3, 4, 2, 2]), [
      "twos",
      "threes",
      "fours",
      "three of a kind",
      "chance",
    ]);
  });

  test("Example 3", () => {
    assert.deepEqual(analyzeDice([4, 3, 6, 3, 5]), [
      "threes",
      "fours",
      "fives",
      "sixes",
      "small straight",
      "chance",
    ]);
  });

  test("detects Big Straight", () => {
    assert.deepEqual(analyzeDice([2, 3, 4, 5, 6]), [
      "twos",
      "threes",
      "fours",
      "fives",
      "sixes",
      "small straight",
      "big straight",
      "chance",
    ]);

    assert.deepEqual(analyzeDice([1, 2, 3, 4, 5]), [
      "aces",
      "twos",
      "threes",
      "fours",
      "fives",
      "small straight",
      "big straight",
      "chance",
    ]);
  });

  test("detects Yahtzee", () => {
    assert.deepEqual(analyzeDice([1, 1, 1, 1, 1]), [
      "aces",
      "three of a kind",
      "four of a kind",
      "yahtzee",
      "chance",
    ]);
  });
});
