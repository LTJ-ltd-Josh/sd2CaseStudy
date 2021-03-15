"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("programmeController", function($scope, $http){

    $http.get("/programmes").then(function)
});