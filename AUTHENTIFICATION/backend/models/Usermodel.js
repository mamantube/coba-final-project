import { Sequelize } from "sequelize";
import db from "../config/Database";

const {Datatypes} = Sequelize;

const Users = db.define ("users", {
    uuid: {
        type: Datatypes.STRING,
        defaultValue: Datatypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})