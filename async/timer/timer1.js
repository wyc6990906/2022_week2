const timerHandler = function () {
  const args = process.argv.slice(2)
  args.sort((a, b) => a - b)
  // console.log(args)
  if (args.length < 1) {
    console.log('You should enter some numbers!!!')
    return
  }
  for (const item of args) {
    let number = Number(item)
    if (number) {
      if (number < 0) {
        // Ignore/skip any numbers that are negative
        continue;
      } else {
        setTimeout(() => {
          console.log(number)
          process.stdout.write('\x07');
        }, number * 1000)
      }
    } else {
      // not a number will be NaN
      console.log('You must enter valid number!!!')
      return
    }
  }
}
timerHandler()


