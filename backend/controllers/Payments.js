const Razorpay = require('razorpay'); 
const { RAZORPAY_ID, RAZORPAY_SECRET } = process.env;
const Order = require("../models/Order");

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID,
    key_secret: RAZORPAY_SECRET
});

const getPaymentInfo = async(req,res)=>{
    const {paymentId} = req.params;
    
    try {
        const payment = await razorpayInstance.payments.fetch(paymentId)

        if (!payment){
            return res.status(500).json("Error at razorpay loading")
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        })
    } catch(error) {
        res.status(500).json("failed to fetch")
    }

}

const createOrder = async(req,res)=>{
    try {
        const amount = req.body.amount*100
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'razorUser@gmail.com'
        }

        const order = await razorpayInstance.orders.create(options);

        res.json({success:true,data:order})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Error During Payment'})
    }
}


module.exports = {
    getPaymentInfo,
    createOrder
}