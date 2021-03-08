"use strict";

exports.Student = class {

    //student id
    id;
    //student firstname
    firstName;
    //student last name
    lastName;
    //student programme
    programme;
    // student modules and grades
    modules = [];
 
    constructor(id, firstName, lastName, programme){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.programme = programme;
    }
}

exports.Programme = class {
    //Programme Code
    code;
    // Programme Name
    name;
    // Programme modules
    modules = []

    constructor (code, name){
        this.code = code;
        this.name = name;
    }
}

exports.Module = class {
    // Module code
    code;
    // Module name
    name;

    constructor(code, name){
        this.code = code;
        this.name = name;
    }
}