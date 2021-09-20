#!/usr/bin/env node

/**
 * bootstrap.js
 *
 * initializes the web server
 */

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();

/*
 * Express configuration
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Import all the routes from the controllers directory.
app.use(require("./controllers"));

// serve static assets normally
app.use(express.static(__dirname + "/../../public"));

// handle every other route with index.html, which will contain
// a script tag to the application's JavaScript files.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../../public", "index.html"));
});

exports.init = async function () {
  const port = 8080;
  const server = app.listen(port);
  console.info("Server up on http://localhost:" + port);

  process.once("SIGINT", function () {
    console.info("Terminating web server...");
    server.close();
  });
};
