const mongoose = require("mongoose");

const MONGODB_URL = "mongodb+srv://admin:admin@cluster0.kufjmsk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB Connected...");
})
.catch((err)=>{
    console.log(err.message);
})