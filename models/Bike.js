// require our ORM
var mongoose = require('mongoose'); // our handy dandy ORM (obj relational model)

// define what types our values should be
// using a Schema - this is similar declaring
// table columns etc using Migration
var bikeSchema = new mongoose.Schema({
  frame: String,
  weight: Number,
  groupset: String,
  wheelset: String
})

// we export a Mongoose Model with the Schema
// a model is a row of your database
//
module.exports = mongoose.model("Bike", bikeSchema)
