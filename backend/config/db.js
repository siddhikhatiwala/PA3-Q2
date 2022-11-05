var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cartdb", {useNewUrlParser:true}).then(()=>{console.log("Successful connection!")})
.catch((err)=>{console.log(err)});
module.exports=mongoose;