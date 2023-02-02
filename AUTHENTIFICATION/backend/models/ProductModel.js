import { Sequelize } from "sequelize";
import db from "../config/Database";
import Users from "./UserModel.js";

const {Datatypes} = Sequelize;

const Products = db.define ("product", {
    uuid: {
        type: Datatypes.STRING,
        defaultValue: Datatypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }



    
}, {
    freezeTableName: true
});

Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey: "userId"});

export default Products;