"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("programmeController", function($scope, $http){

    $scope.programmes = [
                        new Programme ("000", "test1"),
                        new Programme ("000", "test2"),
    ];
});