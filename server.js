const express = require('express');
const process = require('process');
const server = express();
const httpPort = 4000;
let counter = 0;

server.post("/:parameter", (req, res) => {
  switch (req.params.parameter) {
    case "inc":
      res.send((++counter).toString());
      res.status(200);
      break;
    case "dec":
      res.send((--counter).toString());
      res.status(200);
      break;
    case "die": process.kill(0); break
  }
})

server.get("/", (req, res) => {
  res.send((counter).toString())
  res.status(200);
})



server.listen(httpPort, () =>
  console.log(`Http server listening on port: ${httpPort}`));