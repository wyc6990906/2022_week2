const str = "|/-\|/-\|\|/-\|/-\|\|/-\|/-\|\|/-\|/-\|\n";

let arr = str.split("")
// console.log(arr)
for (const item in arr) {
  setTimeout(() => {
    // console.log(item)
    process.stdout.write('\r' + arr[item]);
  }, 200 * item)
}
