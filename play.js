const connect = require("./client"); // const myObject = require("./fileA");
const setupInput  = require("./input"); // Added in Input Module Challenge

console.log("Connecting ...");

setupInput(connect());
