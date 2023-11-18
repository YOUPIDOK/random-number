/* jshint esversion: 6 */

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const min = 1;
  const max = 100;
  res.end(JSON.stringify({
    min,
    max,
    random_number: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
