let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = (data) => { // We use the on method on stdin to register a callback.
  if (data === '\u0003') { // USED TO EXIT THE PROGRAM (WITHOUT IT WE ARE STUCK!!)
    console.log("YOU'RE DISCONNECTED!!!");
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
    console.log('up');
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
    console.log('down');
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === 'f') {
    connection.write("Say: Eat my shorts");
  } else if (data === 'v') {
    connection.write("Say: Yoink");
  } else if (data === 'r') {
    connection.write("Say: D'oh");
  } else if (data === 'e') {
    connection.write("Say: I AM SO SMART - SMRT");
  } else if (data === 'q') {
    connection.write("Say: Why You Little...");
  } else if (data === 't') {
    connection.write("Say: Saxamaphone!");
  } else if (data === 'j') {
    connection.write("Say: SAYONARA!!");
  }
};

module.exports = setupInput;
