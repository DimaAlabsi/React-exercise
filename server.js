"use strict";
const express = require("express");
const cors = require("cors");
const notFoundHandler = require("./handlers/404");
const errorHandler = require("./handlers/500");


const app = express();

const customerRouter = require("./routes/customer");
const orderRouter = require("./routes/order");
const itemRouter = require("./routes/items");
app.use(express.json());
app.use(cors())
app.use(customerRouter);
app.use(orderRouter);
app.use(itemRouter);
function start(port) {
  app.listen(port, () => console.log(`Running on Port ${port}`));
}
app.use("*", notFoundHandler);
app.use(errorHandler);
module.exports = {
  app: app,
  start: start,
};
