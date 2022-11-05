const router = require('express').Router();
// const Cart = require("../models/Cart");
const Product = require("../models/Product");

router.get("/", (req,res)=>{
    Product.find((err,result)=>{
        if(err)
            res.send(err);
        res.send(result);
    })
})
module.exports=router;
