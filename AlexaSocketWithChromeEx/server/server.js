//Third party  modules are express, path , socket.io


//added thrird party of socket.io

const path = require('path');

const express = require('express');

const socketIO = require('socket.io');

//inbuild model, it's used for connect the socketsocket
const http = require('http');

//middleware connecion
const alexaDogPic = path.join(__dirname, '../AlexaDogPictureWithChromeExtension');

var app = express();

var server = http.createServer(app); //this create server require req and res, that's same we did in app

var io = socketIO(server); //socketIO is require the http server as a perameter

app.use(express.static(alexaDogPic));

io.on('connect', (socket) => {
    console.log("New user is connected...");
    socket.on('disconnect', () => { // this will disconnect when the page is closed or window is closed
        console.log("User was Disconnected");
    });
}); // this on method is used to register the event, connection is build in event listner 

server.listen(1000, () => {
    console.log("server started...");
});

