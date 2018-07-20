var WebSocket = require('uws');
var ws = new WebSocket('ws://localhost:4000');

//called when connection established
ws.on('open', function open() {
    console.log('Connected!');
    ws.send('Hello Server!');
});
//listen for errors
ws.on('error', function error() {
    console.log('Error connecting!');
});
//listens for message from server
ws.on('message', function(data, flags) {
    console.log('Received from server : ' + data);
});
//invoked when connection is closed
ws.on('close', function(code, message) {
    console.log('Disconnection: ' + code + ', ' + message);
});