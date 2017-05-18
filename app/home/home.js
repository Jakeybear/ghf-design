'use strict';

angular.module('myApp.home', [
  'ngRoute',
  'myApp.service.eventData',

])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl:'home/view.html',
    controller:'homeCtrl'

  });
}])

.controller('homeCtrl', ['$scope','eventData', function($scope,eventData){

  $scope.sortorder='name';
  eventData.getEvent(function(data){
    console.log(data);
    $scope.event=data;
  });

  $scope.upVoteSession = function(session){
    session.upVoteCount++;
  };
  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  };
}]);