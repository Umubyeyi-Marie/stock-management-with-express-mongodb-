const stockModel = require('../models/stock.model' );

const create= async( req, res, next)=>{
    try{
/*console.log(req.body);
const savedstock = await stockModel.save(req.body);*/
 const newStock = new stockModel(req,body);
await newStock.save();

      res.status(201).json({
        message:"stock created",
        stock:savedStock
      })
    }catch(error){
        res.status(500).send("failed to save")
    }
}

const update= async( req, res, next)=>{
    
}

const find= async( req, res, next)=>{
    
}


const  list= async( req, res, next)=>{
    
}
module.exports = {
    create,update,find,list
}
