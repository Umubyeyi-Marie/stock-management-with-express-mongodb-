const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name:{ required:true, type:string},
    type:{required:true, type:string},
    quantity:{required:true, type:string},
    price:{required:true, type:string},
    totalPrice:{required:true, type:string},
    quality:{
       enum:{
        type:["firstQuality","middleQuality", "lastQuality"],
        message:"{value} is not a quality",
    }
    },
    arrivalDate:{
        required:true,
        type: Date,
        default :new Date(),
    }
})


module.exports = mongoose.model('stock',stockSchema);