const mongoose = require("../config/db");
const CartSchema = new mongoose.Schema({
    product_name: {
        type: String,
        ref: "Product"
    },
    quantity: Number,
    total_price: Number
})
const Cart = mongoose.model("Cart",CartSchema);
module.exports=Cart;