const http = require('http');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello nini!\n I have just changed your title !'
  res.end(msg);
});

server.listen(port,ip, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
