'use strict';

angular.module('myApp.signEvent', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signevent', {
    templateUrl: 'signEvent/view.html',
    controller: 'signEventCtrl'
  });
}])

.controller('signEventCtrl', ['$scope','$firebaseObject', function($scope, $firebaseObject) {


  var ref = firebase.database().ref();
  $scope.objs= $firebaseObject(ref);
  console.log($scope.objs);

}]);