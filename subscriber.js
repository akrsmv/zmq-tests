// subber.js
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

var topics = process.argv[2]
var ports = process.argv[3] || "3001"

for (var port of ports.split(",")) {
  sock.connect(`tcp://127.0.0.1:${port}`);
  console.log(`Subcriber connected to ${port}`)
}

for (var topic of topics.split(",")) {
  sock.subscribe(topic);
  console.log(`Subcriber subscribed for ${topic}`);
}

sock.on("message", function (topic, body) {
  console.log("subscriber: %s, %s", topic.toString(), body.toString());//JSON.parse(body.toString()));
});
