'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.login',
  'myApp.signEvent',
  'myApp.signUp',
  'myApp.service.eventData',
  'firebase'

]).
config(['$routeProvider', function( $routeProvider) {

  $routeProvider.otherwise({redirectTo:'/home'});
}]);
