const net = require("net");

const moveUp = "Move: up";
let delay = 0;
const increment = 50;

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  "165.227.47.243", // IP MUST BE IN QUOTES!!
    port: 50541, // NO QUOTES JUST NUMBER VALUE
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //  Data event!
  conn.on('data', (data) => {    // ADDED THIS: net.createConnection() from nodejs.org website
    console.log(data.toString());
  });

  // CONNECT
  conn.on('connect', (connect) => {
    console.log("YOU'RE CONNECTED!!!"); // MESSAGE SHOWING THAT WE ARE CONNECTED!
    conn.write('Name: ZIM'); // MY USERNAME
    
    for (let i = 0; i < 5; i++) {
    setTimeout(() => {
       conn.write(moveUp);
       }, delay);
       delay += increment;
    // conn.write("Move: up"); // only moves the snake up ONCE
      }
  });
  return conn;
};

module.exports = connect;
