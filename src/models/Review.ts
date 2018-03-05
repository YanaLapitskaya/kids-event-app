import { sequelize } from "../db/db";
import * as ORM from "sequelize";

export const Review = sequelize.define("Review", {
    id: {
        type: ORM.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: ORM.STRING,
    text: ORM.STRING
});


