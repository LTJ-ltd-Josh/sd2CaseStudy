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

// export get students function

exports.getStudents = function(callback){
    // create our SQL statement

    var sql = `
    
            SELECT 
                Students.id,
                Students.first_name,
                Students.last_name,
                Students.programme,
                Programmes.name

            FROM
                Students,
                Programmes
            WHERE
                Students.programme = Programmes.code
                `;
    //Execute query. Return all
    db.all(sql, function(err, rows){

        if (err){
            console.error(err.message);
        }
    
        // create an array of students
        var students = [];
        //loop through rows and create a student object
        for (var row of rows){
            //create a programme object
            var prog = new student.Programme(row.programme, row.name);
            // create a student object
            var stud = new student.Student(row.id, row.firstName, row.lastName, prog);
            // add student to array
            students.push(stud);
        }
        // Execute callback function
        callback(students);
    });

};
