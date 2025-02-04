const multer =  require("multer");
const multerStorage = multer.diskStorage({
    destination: "./tmp",
    filename: (req,file,cb)=>{
        console.log("uploading file");
        console.log(file.originalname);
        
        cb(null,file.originalname);
    }
});
const upload = multer({
    dest: "./tmp",
    storage: multerStorage
})
module.exports={
    upload
}