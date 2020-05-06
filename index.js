"use strict";

var http = require("http");
var express = require("express");
var fs = require("fs");
var ejs = require("ejs");

var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  fs.readFile("./public/index.ejs", "utf8", (err, data) => {
    let payload = req.query.payload;
    try {
      payload = payload && JSON.parse(payload) ? JSON.parse(payload) : {};
    } catch (e) {
      payload = {};
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(ejs.render(data, payload));
  });
});

var server = http.createServer(app);

server.listen(process.env.PORT || 52273, function () {
  console.log("server is running");
});
