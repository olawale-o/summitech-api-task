const http = require('http');

const app = require('./src/app');
const server = http.createServer(app);

server.listen(5000, () => {
  console.log('Server started on port 5000');
});

module.exports = server;