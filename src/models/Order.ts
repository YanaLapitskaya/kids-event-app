import { sequelize } from "../db/db";
import * as ORM from "sequelize";
import { Client } from "./Client";
import { Service } from "./Service";

export const Order = sequelize.define("Order", {
    id: {
        type: ORM.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: ORM.DATE,
    price: ORM.DOUBLE,
    comments: ORM.TEXT
});

Order.belongsTo(Client, {foreignKey: "client_id" });
Client.hasMany(Order, {foreignKey: "client_id" });
Order.belongsToMany(Service, {through: "OrderService"});
Service.belongsToMany(Order, {through: "OrderService"});

