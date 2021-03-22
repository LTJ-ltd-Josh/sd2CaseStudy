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
    // call getModule
    data.getModules(req.params.code, function(module){
        res.json(module);
    });
});

// add /modules endpoint
app.get("/modules", function(req, res){
     // call get students on data
     data.getModules(function(modules){
        res.json(modules);
    });

});

// add /programme endpoint
app.get("/programme/:code", function(req, res){
    // return "programme and code"

    res.send("Programme: "+ req.params.code);

});

// add /programmes endpoint
app.get("/programmes", function(req, res){
     // call get students on data
     data.getProgrammes(function(programmes){
        res.json(programmes);
    });

});


// add /student endpoint
app.get("/student/:id", function(req, res){
    // return "programme and code"

    res.send("Student: "+ req.params.id);

});

// add /students endpoint
app.get("/Students", function(req, res){
    // call get students on data
    data.getStudents(function(students){
        res.json(students);
    });
    

});

// initiate server
app.listen(3000, function(err){
    if (err){
        console.error(err.message);
    }
    console.log('listening on port 3000')
});


// can check recording for info about deleting.