// producer.js
var zmq = require("zeromq"),
  sock = zmq.socket("push");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Producer bound to port 3000");

let count = 0
setInterval(function() {
  count++
  console.log(`sending ${process.argv[2]}`, count);
  sock.send([`${process.argv[2]}`, JSON.stringify({count})]);
}, 1000);