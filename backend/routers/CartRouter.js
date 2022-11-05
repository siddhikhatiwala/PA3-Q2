const router = require('express').Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

router.get("/", (req,res)=>{
    Cart.find((err,result)=>{
        if(err)
            res.send(err);
        res.send(result);
    })
})

router.get("/:id", (req,res)=>{
    Cart.findById({_id: req.params.id},(err,result)=>{
        if(err)
            res.send(err);
        res.send(result);
    })
})

router.post("/",async(req,res)=>{
    Product.find({product_name: req.body.product_name}, async(err,result)=>{
        var p = parseFloat(result[0].price);
        var q = parseInt(req.body.quantity);
        var tp = parseFloat(q*p);
        var p = new Cart({
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            total_price: tp
        });
        await p.save();
    })
})

router.put("/:id", (req,res)=>{
    Product.find({product_name: req.body.product_name}, (err,result)=>{
        var p = parseFloat(result[0].price);
        var q = parseInt(req.body.quantity);
        var tp = parseFloat(q*p);
        Cart.findByIdAndUpdate({"_id":req.params.id},{
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            total_price: tp
        }, {new:true}, (err,res1)=>{
            if(err) console.log(err);
            else console.log(res1);
        })
    })
})

router.delete("/:id", (req,res)=>{
    Cart.findByIdAndRemove({_id:req.params.id}, (err,result)=>{
        if(err) console.log(err);
        else console.log(result);
    });
})

module.exports=router;