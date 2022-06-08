const net = require('net')
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  })
  //Print a message to the screen when the connection is successfully established.
  //seems not correct~
  conn.on("data", (data) => {
    console.log(`Name: DYL`)
  })
  conn.on("connect", () => {
    console.log(`Successfully connected to game server...`)
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn
}


module.exports = {
  connect
}
