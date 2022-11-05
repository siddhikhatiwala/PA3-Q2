const express=require("express")
const app=express()
const cors = require("cors")
const CartRouter=require("./routers/CartRouter")
const ProductRouter=require("./routers/ProductRouter")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use("/cart",CartRouter);
app.use("/product",ProductRouter);

app.listen(8000);