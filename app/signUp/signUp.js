'use strict';

angular.module('myApp.signUp', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signUp/view.html',
            controller: 'signUpCtrl'
        });
    }])

    .controller('signUpCtrl', ['$scope', '$firebaseArray', 'firebaseData', function ($scope, $firebaseArray, firebaseData) {
        var ref = firebase.database().ref();
        var objs = $firebaseArray(ref);
        $scope.user = {
            email: '',
            password: '',
            password2: ''
        };

        var admin = $scope.user;
        $scope.addUser = function () {
            console.log(admin);
            return firebaseData.addUser(admin,objs)

        }

    }])

    .directive('compare',function(){
        var o={};
        o.restrict ='EA';
        o.scope={
            orgText:'=compare'
        }
        o.require = 'ngModel';
        o.link = function(scope,ele,attr,ctrl){
            ctrl.$validators.compare = function(value){
                return value ==scope.orgText;
            }
            scope.$watch('orgText', function(){
                ctrl.$validate();
            })
        }
        return o;

    });