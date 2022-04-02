"use strict";
const item = (sequelize, DataTypes) =>
  sequelize.define("items", {
    itemCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = item;
