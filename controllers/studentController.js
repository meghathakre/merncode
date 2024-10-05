import StuModel from "../models/studentModel.js";
class StuController{
    static studentInfo=async(req,res)=>{
        res.send("this is student Information")
    } 
    static studentDisplay=async(req,res)=>{
        res.send("this is informtaion of student Data!! display")
}
static studentInsert=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const Data=await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("data successfully save!!");
    
}
static studentDataDisplay=async(req,res)=>{
    const Data=await StuModel.find();
    res.send(Data);
}
}
export default StuController;