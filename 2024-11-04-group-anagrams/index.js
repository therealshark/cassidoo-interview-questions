export function groupAnagrams(words) {
  const groups = new Map();
  words.forEach((word) => {
    const normalized = word.split("").toSorted().join("");
    const list = groups.get(normalized) ?? [];
    list.push(word);
    groups.set(normalized, list);
  });
  return [...groups.values()];
}
