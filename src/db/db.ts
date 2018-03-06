import * as ORM from "sequelize";
import { Sequelize, Options } from "sequelize";

const dbUrl: string = "postgres://postgres:73904512@localhost:5432/kids-events";
const options: Options = {
    benchmark: true,
    logging: console.log,
    define: {
        underscored: true,
        timestamps: true,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        paranoid: false
    }
};
export const sequelize: Sequelize = new ORM(dbUrl, options);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
