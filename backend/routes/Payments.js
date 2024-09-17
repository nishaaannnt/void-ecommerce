const express = require('express')
const paymentController = require("../controllers/Payments")
const router = express.Router()

router
    .post("/",paymentController.createOrder)
    .get("/:paymentId",paymentController.getPaymentInfo)


module.exports=router