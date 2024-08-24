/**
 * parses input arguments into a Map of topics by port
 * @returns Map<port, topic[]>
 */
module.exports = () => process.argv.slice(2).reduce((topics_accum, arg, index, topics_and_ports_arr) => {
    if (index % 2 == 0) { // start from topics
      if (!topics_and_ports_arr[index+1]) {
        console.error('incorrect sequence of arguments!');
        console.log('usage: node publisher TOPIC1,TOPIC2 port1 TOPIC3,TOPIC4,TOPIC5 port2 TOPIC1 port3');
        process.exit(1);
      }
      topics_accum.set(topics_and_ports_arr[index+1], arg.split(','));
    }
    return topics_accum;
  },new Map()) // toipcs by port)