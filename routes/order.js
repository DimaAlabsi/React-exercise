"use strict";

const express = require("express");
const router = express.Router();
const { orderCollection } = require("../models/index");

router.get("/order", getOrder);
router.post("/order", createOrder);
router.put("/order/:id", updateOrder);
router.delete("/order/:id", deleteOrder);
async function getOrder(req, res) {
  let order = await orderCollection.read();
  res.status(200).json(order);
}

async function createOrder(req, res) {
  let newOrdInfo = req.body;
  let order = await orderCollection.create(newOrdInfo);
  res.status(201).json(order);
}

async function updateOrder(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updateOrder = await orderCollection.update(id, obj);
  res.status(201).json(updateOrder);
}

async function deleteOrder(req, res) {
  const id = parseInt(req.params.id);
  const deletedOrder = await orderCollection.delete(id);
  res.status(204).json(deletedOrder);
}
module.exports = router;
