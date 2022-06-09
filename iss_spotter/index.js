//It will require and run our main fetch function.

const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// })
//
// fetchCoordsByIP('70.77.16.64', (error, data) => {
//   if (error) {
//     console.log(" fetchCoords  didn't work!", error);
//   }
//   console.log('It worked! Returned coordinates:', data)
// })
//
// //  { latitude: 51.06283187866211, longitude: -113.88871002197266 }
// const myCoords = {latitude: 51.06283187866211, longitude: -113.88871002197266}
// fetchISSFlyOverTimes(myCoords, (error, data) => {
//   if (error) {
//     console.log(" fetchISSFlyOverTimes  didn't work!", error);
//   }
//   console.log(' fetchISSFlyOverTime worked! Returned flyOverTimes:', data)
// })
//

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

//  promise not callback-hell
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
