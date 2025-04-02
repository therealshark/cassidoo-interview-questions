function timestampToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

export function findLongestTimeGap(times) {
  const timesInMinutes = times.map(timestampToMinutes);
  timesInMinutes.sort((a, b) => a - b);
  let longestGap = 0;

  for (let i = 1; i < timesInMinutes.length; i++) {
    const gap = timesInMinutes[i] - timesInMinutes[i - 1];
    longestGap = Math.max(longestGap, gap);
  }

  return longestGap;
}
