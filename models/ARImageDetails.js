const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageDetailschema = new Schema({
    
    VuforiaImageName : {
        type : String,
        required: true
    },
    ImageName : {
        type : String,
        required: true
    },
    Year : {
        type : String,
        required: true
    },
    Artist : {
        type : String,
        required: true
    },
    Description : {
        type : String,
        required: true
    }
   
   
})
const ImageDetails = mongoose.model("ImageDetails",ImageDetailschema);
module.exports=ImageDetails;