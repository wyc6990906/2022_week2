const request = require('request');
const fs = require('fs')
const httpUrl = process.argv[2]
const path = process.argv[3]

request(httpUrl, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return
  }
  if (response && response.statusCode === 200) {
    console.log('request success!')
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return `error: Path is not legal! `
      }
      //  stats.size =  The size of the file in bytes.
      fs.stat(path, (err, stats) => {
        if (err) {
          throw  err
        }
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
      })
    })
  }
});


