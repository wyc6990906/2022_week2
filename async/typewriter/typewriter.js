const sentence = "hello there from lighthouse labs \n";
let timer = 0
for (let char of sentence) {
  // inline
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)
  timer += 50
}
