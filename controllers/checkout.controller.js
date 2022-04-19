"use strict";

const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

var pk =
  "pk_test_51KnFuASIuI5j5SkC6gXKxrHKn83pHP21S9rAe8gWiBvHMfirl19SpfF1U3M006czttpgSkWwv1WaYfsXCeqBwIEx00sOWX6NNi";
var Publishable_Key = pk.trim();
var sk =
  "sk_test_51KnFuASIuI5j5SkCbnFsjdGUsYa4fHXfqrlg8FyJnu6RBjRViTbmnzFyZu4Nv9h5wNv82QM94dyoKeaygBpaJhP200y7bGcXnF";
var Secret_Key = sk.trim();

const stripe = require("stripe")(Secret_Key);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// View Engine Setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/views")));
var checkoutForm = require("../forms/checkout/checkout.form.js");
var checkoutService = require("../services/checkout.service.js");

var date = new Date();

/* Checkout */
var checkout = function (req, res) {
  if (req.method === "POST") {
    checkoutService.processCheckout(req);
    res.redirect("/checkout/pay");
  } else {
    res.render("checkout", {
      title: "Checkout Page",
      year: date.getFullYear(),
      form: checkoutForm,
    });
  }
};

// Pay
var pay = function (req, res) {
  res.render("pay", {
    key: Publishable_Key,
  });
};

/* Receipt */
var receipt = function (req, res) {
  res.render("receipt", {
    title: "Receipt Page",
    year: date.getFullYear(),
  });
};

var payment = function (req, res) {
  if (method == "POST") {
    stripe.customers
      .create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: "Gautam Sharma",
        address: {
          line1: "TC 9/4 Old MES colony",
          postal_code: "110092",
          city: "New Delhi",
          state: "Delhi",
          country: "India",
        },
      })
      .then((customer) => {
        return stripe.charges.create({
          amount: 7000, // Charing Rs 25
          description: "Web Development Product",
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge) => {
        res.send("Success"); // If no error occurs
      })
      .catch((err) => {
        res.send(err); // If some error occurs
      });
  }
};

/* Exports all methods */
module.exports = {
  checkout: checkout,
  receipt: receipt,
  pay: pay,
  payment: payment,
};
