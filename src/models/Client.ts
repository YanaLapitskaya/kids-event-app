import { sequelize } from "../db/db";
import * as ORM from "sequelize";

export const Client = sequelize.define("Client", {
    id: {
        type: ORM.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: ORM.STRING,
    phone: ORM.INTEGER,
    social_networks: ORM.ARRAY(ORM.STRING),
    notes: ORM.TEXT
});


