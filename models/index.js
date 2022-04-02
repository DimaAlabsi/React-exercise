"use strict";

require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");



let sequelize = new Sequelize(DATABASE_URL);

const customerSchema = require("./customer.schema.js");
const orderSchema = require("./order.schema.js");
const itemSchema = require("./item.schema.js");
const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);
const itemModel = itemSchema(sequelize, DataTypes);
customerModel.hasMany(orderModel, {
  foreignKey: "customerId",
  sourceKey: "id",
});
orderModel.belongsTo(customerModel, {
  foreignKey: "customerId",
  targetKey: "id",
});

const Collection = require("./lib/collection.js");

const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);
const itemCollection = new Collection(itemModel);
module.exports = {
  db: sequelize,
  customerCollection: customerCollection,
  orderCollection: orderCollection,
  itemCollection: itemCollection,
};
