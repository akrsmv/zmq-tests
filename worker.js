// worker.js
var zmq = require("zeromq"),
  sock = zmq.socket("pull");

sock.connect("tcp://127.0.0.1:3000");
console.log("Worker connected to port 3000");

sock.on("message", function (topic, body) {
  console.log("worker: %s, %s", topic.toString(), JSON.parse(body.toString()));
});