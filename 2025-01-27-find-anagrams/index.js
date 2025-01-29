function normalize(str) {
  return str.split("").toSorted().join("");
}

export function findAnagrams(searchSpace, anagram) {
  const foundAnagrams = [];
  const normalized = normalize(anagram);

  for (let i = 0; i < searchSpace.length - anagram.length + 1; i++) {
    if (normalized === normalize(searchSpace.slice(i, i + anagram.length))) {
      foundAnagrams.push(i);
    }
  }

  return foundAnagrams;
}
