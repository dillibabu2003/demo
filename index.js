const MONGO_URI="mongodb://localhost:27017/mongoconnect";



/* this*/
const express=require("express");
const mongoose=require("mongoose");
const { upload } = require("./multer");
const cors = require("cors");
const app=express();

app.use(express.json());
app.use(cors());
app.post("/upload",upload.single("img"),(req,res)=>{
    res.status(200).json({success: true,message: "File uploaded successfully."});
})

mongoose.connect(MONGO_URI).then(()=>{
    app.listen(7777,()=>{
        console.log("App listening on port 7777");
    })
})
/* new changes*/

