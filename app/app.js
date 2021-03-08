"use strict";

// the application layer uses student classes
const student = require("../student.js");

// the application layer talks to the data layer
const data = require("../data/data.js");

// import express library
const express = require("express");

// create express application
var app = express()

// add static files location
app.use(express.static("static"));


// add /module endpoint
app.get("/module/:code", function(req, res){
    // return "Module and code"

    res.send("Module: "+ req.params.code);

});

// add /modules endpoint
app.get("/modules", function(req, res){
    // return all modules

    res.send("All Modules");

});

// add /programme endpoint
app.get("/programme/:code", function(req, res){
    // return "programme and code"

    res.send("Programme: "+ req.params.code);

});

// add /programmes endpoint
app.get("/programmes", function(req, res){
    // return all modules

    res.send("All Programmes");

});


// add /student endpoint
app.get("/student/:id", function(req, res){
    // return "programme and code"

    res.send("Student: "+ req.params.id);

});

// add /programmes endpoint
app.get("/Students", function(req, res){
    // return all modules

    res.send("All Students");

});

// initiate server
app.listen(3000, function(err){
    if (err){
        console.error(err.message);
    }
    console.log('listening on port 3000')
});