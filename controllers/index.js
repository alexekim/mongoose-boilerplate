var express = require('express');
var controller = express.Router();

// grab my model
//var Model = require('../models/MyModel');
var Bike = require('../models/Bike');

/* GET home page. */
controller.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //Bike. is the model
  Bike.find(function(err, Bikes){
    if (err) return next(err);
    res.json(Bikes)
    // res.render('viewofchoice',)
  });
})

controller.post('/', function(req, res, next){
  //req.body is our data, the first argument is the data
  Bike.create(req.body, function(err, Bike){
    if (err) return next(err);
    res.json(Bike)
  })
})

//finding one item in db by ID
controller.get('/:id', function(req, res, next){
  //the id is in the params
  Bike.findById(req.params.id, function(err, Bike){
    if (err) return next(err);
    res.json(Bike)
  })
})

// modern browsers accept patch the future
// patch is update. put is the old way
controller.patch('/:id', function(req, res, next){
                        // id of item   whatchanging
  Bike.findByIdAndUpdate(req.params.id, req.body, function(err, Bike){
    if (err) return next(err);
    res.json(Bike)

  })
});

controller.put('/:id', function(req, res, next){
  Bike.findByIdAndUpdate(req.params.id, req.body, function(err, Bike){
    if (err) return next(err);
    res.json(Bike)

  })
})

//deleting.
controller.delete('/:id', function(req, res, next){
  Bike.findByIdAndRemove(req.params.id, function(err, Bike){
    if (err) return next(err);
    res.json(Bike)
  })
})


// .get('/api', function(req, res, next) {
//   // get ALL of the types from my TYPES collection
//   // .find has an error and maybe types that we want.
//   Model.find(function(err, types) {
//     if (err) console.log(err);
//     res.json(types);
//   });
// });

module.exports = controller;
