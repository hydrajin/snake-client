const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //  Data event!
  conn.on('data', (data) => {    // ADDED THIS: net.createConnection() from nodejs.org website
    console.log(data.toString());
  });

  // CONNECT
  conn.on('connect', () => {
    console.log("YOU'RE CONNECTED!!!"); // MESSAGE SHOWING THAT WE ARE CONNECTED!
    conn.write('Name: ZIM'); // MY USERNAME

  });
  return conn;
};

module.exports = connect;
