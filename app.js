import express from "express";
const app=express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import stuRoute from "./routes/studentRoute.js";
mongoose.connect("mongodb://127.0.0.1/module").then();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/students",stuRoute);

app.listen(8000.,()=>{
    console.log("server run on 8000 port!");
})