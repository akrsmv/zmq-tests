// pubber.js
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

var topic = process.argv[2]
var port = process.argv[3] || 3001

sock.bindSync(`tcp://127.0.0.1:${port}`);
console.log(`Publisher bound to port ${port}`);

let count = 0
setInterval(function () {
  count++
  console.log(`PUB[port:${port}] ${topic}`, count);
  sock.send([topic, JSON.stringify({ count })]);
}, 500);