"use strict";

//import SQLite library
const sqlite3 = require("sqlite3").verbose();

// the application layer needs student classes
const student = require("../student.js");

// connect to the database
var db = new sqlite3.Database("data/students.db", function(err){
    if (err){
        return console.error(err.message);
    }
    console.log("connected to students database");
});