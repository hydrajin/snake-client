const connect = require("./client"); // const myObject = require("./fileA");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

// const handleUserInput = function(data) {
//   if (data === '\u0003') {   // \u0003 maps to ctrl+c input
//     console.log("YOU'RE DISCONNECTED!!!");
//     process.exit();
//   }
// };

const handleUserInput = (data) => { // We use the on method on stdin to register a callback.
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') { // USED TO EXIT THE PROGRAM (WITHOUT IT WE ARE STUCK!!)
    process.exit();
  }
  console.log("YOU'RE DISCONNECTED!!!");
};