"use strict";
const express = require("express");
const router = express.Router();
const { customerCollection } = require("../models/index");

router.get("/customer", getCustomer);
router.post("/customer", createCustomer);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);

async function getCustomer(req, res) {
  let customer = await customerCollection.read();
  res.status(200).json(customer);
}

async function createCustomer(req, res) {
  let newCusInfo = req.body;
  let customer = await customerCollection.create(newCusInfo);
  res.status(201).json(customer);
}

async function updateCustomer(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatecust = await customerCollection.update(id, obj);
  res.status(201).json(updatecust);
}

async function deleteCustomer(req, res) {
  const id = parseInt(req.params.id);
  const deletedCust = await customerCollection.delete(id);
  res.status(204).json(deletedCust);
}
module.exports = router;
