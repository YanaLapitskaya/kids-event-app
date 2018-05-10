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
    socials: ORM.ARRAY(ORM.STRING),
    notes: ORM.TEXT
});

