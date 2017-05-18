'use strict';

(function (angular) {
    angular.module('myApp.login', [
            'ngRoute',
            'myApp.service.firebaseData',
            'firebase'

        ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'login/view.html',
                controller: 'loginCtrl'
            });
        }])

        .controller('loginCtrl', ['$scope','$firebaseArray','$firebaseAuth', 'firebaseData', function ($scope, $firebaseArray,$firebaseAuth, firebaseData) {
            var ref = firebase.database().ref();
            var objs = $firebaseArray(ref);

            console.log(objs);

            $scope.user = {
                email: '',
                password: '',

            };


            var admin = $scope.user;

            $scope.login = function () {
                return firebaseData.login(admin,objs)

            }





        }])


})(angular);