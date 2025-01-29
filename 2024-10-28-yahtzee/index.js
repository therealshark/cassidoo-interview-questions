export function rollDie() {
  return Math.round(Math.random() * 5) + 1;
}

const Type =
  (...dice) =>
  (c) =>
    dice.every((d) => c.has(d));

const Count = (count) => (c) => [...c.values()].includes(count);
const MinCount = (count) => (c) => c.values().find((e) => e >= count);

const And =
  (...tests) =>
  (c) =>
    tests.every((t) => t(c));

const Or =
  (...tests) =>
  (c) =>
    tests.some((t) => t(c));

const tests = {
  aces: Type(1),
  twos: Type(2),
  threes: Type(3),
  fours: Type(4),
  fives: Type(5),
  sixes: Type(6),
  ["full house"]: And(Count(3), Count(2)),
  ["three of a kind"]: MinCount(3),
  ["four of a kind"]: MinCount(4),
  ["small straight"]: And(Type(3, 4), Or(Type(1, 2), Type(2, 5), Type(5, 6))),
  ["big straight"]: And(Type(2, 3, 4, 5), Or(Type(1), Type(6))),
  yahtzee: Count(5),
  chance: () => true,
};

export function analyzeDice(dice) {
  const diceCount = new Map();

  dice.forEach((die) => {
    const count = diceCount.get(die) ?? 0;
    diceCount.set(die, count + 1);
  });

  return Object.entries(tests).flatMap(([name, test]) =>
    test(diceCount) ? name : []
  );
}

export function yahtzeeRound() {
  const dice = Array.from({ length: 5 }, rollDie);

  return {
    dice,
  };
}
