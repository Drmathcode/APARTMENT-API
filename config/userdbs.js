// import mongoose from "mongoose"
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
let dbUrl;
process.env.NODE_ENV=="development"? dbUrl=process.env.MONGO_URI_DEV : dbUrl=process.env.MONGO_URI_PROD
const connDB = async() => {
    try {
        await mongoose.connect(dbUrl),
        console.log("connected to DB");
    } catch (error) {
        console.log("DB not connected");
    }
}

module.exports = connDB