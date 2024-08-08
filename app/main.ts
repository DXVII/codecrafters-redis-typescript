import * as net from "net";

// Uncomment this block to pass the first stage
const server: net.Server = net.createServer((connection: net.Socket) => {
      connection.on('data', (data) => console.log(`Received: ${data}`));
      connection.write("+PONG\r\n")
      connection.end();
    // connection.write('HTTP/1.1 200 OK\r\n');
    // connection.write('Content-Type: text/html; charset=UTF-8\r\n\r\n');
    // connection.write('<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Test page display!</h1></body></html>');
});

server.listen(6379, "127.0.0.1", () => {
  console.log("Server is listening on 127.0.0.1:6379");
});
