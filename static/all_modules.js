"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("moduleController", function($scope, $http) {
  $http.get("/modules").then(function(response){
     $scope.modules = response.data 
  });

  $scope.deleteModule = function(code){
      console.log(code)

      // send delete message to node server
      $http.delete("/module/" + code).then(function(response){
        // refresh list of modules
        $http.get("/modules").then(function(response){
          $scope.modules = response.data;
        });

      });  
  };

  $scope.new_module = new Module("", "");

  $scope.createModule = function(){
    // send new data to server
    $http.post("/modules", $scope.new_module).then(function(response){

      // reset new module
      $scope.new_module = new Module("", "");

      // refresh list of modules
      $http.get("/modules").then(function(response){
        $scope.modules = resonse.data;
      });
    });
  };
});
