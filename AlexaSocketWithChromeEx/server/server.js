//Third party  modules are express, path , socket.io

const path = require('path');

const express = require('express');

const alexaDogPic = path.join(__dirname, '../AlexaDogPictureWithChromeExtension');

var app = express();

app.use(express.static(alexaDogPic));

app.listen(3000, () => {
    console.log("server started");
})