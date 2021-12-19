require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const app = express();
const router = require("./routers/routes");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set("view engine", "ejs");
app.use(router);
app.listen(process.env.PORT,()=>{
    console.log("sucessfull")
});