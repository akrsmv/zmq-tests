const parse_agrv = require("./parse_argv");

const zmq = require("zeromq"),
  sock = zmq.socket("pub");

const topics_by_port = parse_agrv()

for (const port of topics_by_port.keys()) {
  sock.bindSync(`tcp://127.0.0.1:${port}`);
  console.log(`Publisher bound to port ${port}`);
}

let count = 0
setInterval(function () {
  count++
  for (const port of topics_by_port.keys()){
    for (const topic of topics_by_port.get(port)) {
      console.log(`PUB[port:${port}] ${topic}`, count);
      sock.send([topic, JSON.stringify({ [`${topic}_payload_${port}`]:count })]);
    }
  }
}, 500);