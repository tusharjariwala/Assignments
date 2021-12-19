require("dotenv").config();
require("./config/db").connect();
const product=require("./models/product");
const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const router = require("./routers/productRouter");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use("/",router);
app.listen(process.env.PORT,()=>{
    console.log("successfully")
});


