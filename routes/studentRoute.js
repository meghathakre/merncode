import express from "express";
const route= express.Router();
import StuController from "../controllers/studentController.js";

route.get("/info",StuController.studentInfo);
route.get("/display",StuController.studentInfo);
route.post("/insert",StuController.studentInsert);
route.get("/datadisplay",StuController.studentDataDisplay);

export default route;