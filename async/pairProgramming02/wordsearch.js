const wordSearch = (letters, word) => {
  //vertical
  const verticalJoin = letters[0].map((col, index) =>
    letters.map((row) => row[index])
  );
  console.log(verticalJoin)
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    else {
      for (l of verticalJoin) {
        if (l.includes(word)) return true;
        if (l.join("").includes(word)) return true;
      }
    }
  }
  return false;
}
const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'CICJC')
console.log(result)

module.exports = wordSearch
