require("dotenv").config();

// import express
const express = require("express");
const connDB = require("./config/userdbs");


const apartmentRouter = require("./route/apartment.route");


//create an instance of server

const server = express();


//middleware
server.use(express.json());

connDB();
server.use("/api/v1",apartmentRouter);



server.get("/", (req, res) => {
    res.send("<h1>Welcome </h1>")
})




module.exports = server