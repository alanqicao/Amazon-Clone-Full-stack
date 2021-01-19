const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/* eslint max-len: ["error", { "ignoreStrings": true }]*/
const stripe = require("stripe")("sk_test_51IA8t3HrSn5r0FYXChxGDszU5Aq2cQb676uLmfozFZqJigrkFs0XQX058kN7gFmp0PqJgWPBJmFVdGv5Jt711PxZ00t4Wn3CrZ");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved boom for this amount >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, currency: "usd"});
  response.status(201).send({clientSecret: paymentIntent.client_secret});
});
exports.api = functions.https.onRequest(app);
