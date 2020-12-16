# node-redirector

A very simple node project to redirect all http and https requests.

## Usage

`node index.js --location https://example.com --http 80 --https 443 --key /etc/letsencrypt/live/redirect.to.example.com/privkey.pem --cert /etc/letsencrypt/live/redirect.to.example.com/fullchain.pem`

Exclude `--http` to only launch the https server. Exclude `--https` to only launch the http server.