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


//export getProgrammes function
exports.getProgrammes = function(callback){
    //create SQL statement
    var sql = `SELECT * FROM Programmes`;
    // execute query return all
    db.all(sql, function(err, rows){
        //check if error
        if (err){
            console.error(err.message);
        };

        // create programmes array
        var programmes = [];

        // loop through rows returning programme object
        for (var row of rows){
            var prog = new student.Programme(row.code, row.name);
            programmes.push(prog);
        };

        //
        //execute callback function
        callback(programmes);
    });
};


// export getModules function
exports.getModules = function(callback){

    //create SQL stagement
    var sql = `SELECT * FROM Modules`

    // execute query return all
    db.all(sql, function(err, rows){
        //check for error

        // create module array
        var modules = [];
        // loop through each row create module object
        for (var row of rows){
            var mod = new student.Module(row.code, row.name );
            modules.push(mod);
        };
        //callback function
        callback(modules);
    });
}

exports.getModules = function(code, callback){

    //SQL query
    var sql = `SELECT * FROM Modules WHERE code = ${code}`;

    // execute query
    db.get(sql, function(err, row){
        // error handling

        // create a module object
        var module = new student.Module(row.code, row.name);

    });

    //return module
    callback(module);
};