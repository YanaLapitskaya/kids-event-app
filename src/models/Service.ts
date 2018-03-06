import { sequelize } from "../db/db";
import * as ORM from "sequelize";

export const Service = sequelize.define("Service", {
    id: {
        type: ORM.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    photos: ORM.ARRAY(ORM.STRING),
    title: ORM.STRING,
    description: ORM.TEXT,
    price: ORM.DOUBLE
});

