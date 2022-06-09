const request = require('request')

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      // console.log('statusCode:', response && response.statusCode)
      // console.log(typeof body);
      const data = JSON.parse(body)
      // console.log(data)
      if (data.length !== 0) {
        return callback(error, data[0].description);
      }
      if (data.length === 0) {
        return callback(`We cannot find any cat when search ${breedName} !`)
      }
    }
  });
}
module.exports = {fetchBreedDescription}






