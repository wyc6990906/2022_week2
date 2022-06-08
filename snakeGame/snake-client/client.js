const net = require('net')
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Print a message to the screen when the connection is successfully established.
  // //seems not correct~
  // conn.on("data", (data) => {
  //   console.log(`Name: DYL`)
  // })
  conn.on("connect", () => {
    console.log(`Successfully connected to game server...`)
    const name = 'DYN'
    conn.write(`Name: ${name}`);
    /*
    "Move: up" - move up one square (unless facing down)
    "Move: down" - move down one square (unless facing up)
    "Move: left" - move left one square (unless facing right)
    "Move: right" - move left one square (unless facing left)
    * */
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
    conn.write('Move: up')
  })

  return conn
}


module.exports = {
  connect
}
