const net = require('net')
const {HOST, PORT} = require('./constants')

const connect = function (username) {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Print a message to the screen when the connection is successfully established.
  conn.on("connect", () => {
    console.log(`Successfully connected to game server...`)
    conn.write(`Name: ${username}`);
  })
  //deal message from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn
}


module.exports = {
  connect
}
