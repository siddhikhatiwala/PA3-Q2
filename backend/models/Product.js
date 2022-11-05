const mongoose = require("../config/db");
const ProductSchema = new mongoose.Schema({
    product_name: String,
    price: Number
})
const Product = mongoose.model("Product",ProductSchema,"products");
module.exports=Product;