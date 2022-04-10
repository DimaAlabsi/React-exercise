"use strict";

const express = require("express");
const router = express.Router();
const { itemCollection } = require("../models/index");
router.get("/items/:id", getOneItem);

router.get("/items", getItem);
router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

async function getOneItem(req, res) {
  let id = parseInt(req.params.id);
  let item1 = await itemCollection.read(id);
  res.status(200).json(item1);
}
async function getItem(req, res) {
  let item = await itemCollection.read();
  res.status(200).json(item);
}

async function createItem(req, res) {
  let newItem = req.body;
  let createditem = await itemCollection.create(newItem);
  res.status(201).json(createditem);
}

async function updateItem(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedItem = await itemCollection.update(id, obj);
  res.status(201).json(updatedItem);
}

async function deleteItem(req, res) {
  const id = parseInt(req.params.id);
  const deletedItem = await itemCollection.delete(id);
  res.status(204).json(deletedItem);
}
module.exports = router;
