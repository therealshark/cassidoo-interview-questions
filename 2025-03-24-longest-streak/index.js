export function findLongestStreak(booleans, minimumStreak) {
  let longestStreak = 0;
  let currentStreak = 0;

  for (const currentBoolean of booleans) {
    if (currentBoolean) {
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak >= minimumStreak ? longestStreak : 0;
}
