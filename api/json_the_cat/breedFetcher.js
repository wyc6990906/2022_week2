const request = require('request')
const query = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (!error) {
    // console.log('statusCode:', response && response.statusCode)
    // console.log(typeof body);
    const data = JSON.parse(body)
    // console.log(data)
    let description
    if(error){
      console.log('Something wrong: ',error.message)
    }
    if (data.length !== 0) {
      description = data[0].description
      console.log('description ==== ', description)
    }
    if(data.length ===0 ){
      console.log('We cannot find any cat !')
    }
  }


});

