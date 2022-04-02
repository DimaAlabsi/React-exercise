"use strict";
require("dotenv").config();

const server = require("./server.js");
const { db } = require("./models/index");

db.sync()
  .then(() => {
    server.start(process.env.PORT || 8080);
  })
  .catch(console.error);
