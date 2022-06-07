const sentence = "hello there from lighthouse labs \n";
let timer = 0
for (let char of sentence) {
  // inline
  setTimeout(() => {
    if (char === sentence[sentence.length - 1]) {
      char += '\n'
    }
    process.stdout.write(char);
  }, timer)
  timer += 50
}
