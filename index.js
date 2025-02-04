const MONGO_URI="mongodb://localhost:27017/mongoconnect";



/* this*/
const express=require("express");
const mongoose=require("mongoose");
const app=express();
mongoose.connect(MONGO_URI).then(()=>{
    app.listen(7777,()=>{
        console.log("App listening on port 7777");
    })
})
/* new changes*/

