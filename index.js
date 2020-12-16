const { program } = require('commander');
const http = require('http');
const https = require('https');
const fs = require('fs');

program
  .option('--location <url>', 'redirect location')
  .option('--http <port>', 'http server port')
  .option('--https <port>', 'https server port')
  .option('--key <path>', 'https key path')
  .option('--cert <path>', 'https cert path')

program.parse(process.argv);
console.log(program.opts());

if (!program.location) {
  throw new Error('--location must be set');
}

if (program.http) {
  http.createServer((_req, res) => {
    res.writeHead(301, {'Location': program.location});
    res.end();
  }).listen(program.http);
}

if (program.https) {
  const options = {};
  if (program.key && program.cert) {
    options.key = fs.readFileSync(program.key);
    options.cert = fs.readFileSync(program.cert);
  }
  https.createServer(options, (_req, res) => {
    res.writeHead(301, {'Location': program.location});
    res.end();
  }).listen(program.https);
}