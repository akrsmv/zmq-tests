# zmq-tests
sample code for zeromq usecases

For further reference: https://zeromq.org/languages/nodejs/

## How to use

`npm install`

## publisher

`node publisher <topic> [port]`

- pub/sub
  - in one console: `node publisher topic-A`
  - in another console(s): `node subscriber topic-A`
  - whatever the number of subscribers subscribed to `topic-A`, they all will:
    - receive messages
    - receive only what is being published while they are on
  
- push/pull
  - in one console: `node producer work-A`
  - in another console(s): `node worker`
  - whatever the number of workers connected to **same port**, they will:
    - only one worker will work for produced message, round-robin style
    - producer is buffering so if all workers go down for a while, they will get all messages buffered
  
## pub/sub from multiple processes
### multiple pubs one sub
- in one console: `node publisher topic-A 3001`
- in another console: `node publisher topic-A 3002`
- in a third console: `node subscriber topic-A 3001,3002`
- What happens is that
  - multiple pubs **bind to different ports** and subscriber is connecting **all of them**
  
