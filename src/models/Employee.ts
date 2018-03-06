import { sequelize } from "../db/db";
import * as ORM from "sequelize";

export const Employee = sequelize.define("Employee", {
    id: {
        type: ORM.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: ORM.STRING,
    last_name: ORM.STRING,
    description: ORM.STRING,
    phone: ORM.INTEGER,
    email: ORM.TEXT,
    position: ORM.STRING,
    photo: ORM.STRING
});
