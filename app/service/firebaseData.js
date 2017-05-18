/**
 * Created by jakey on 5/10/2017.
 */
(function (angular) {
    angular.module('myApp.service.firebaseData',['firebase'])
        .factory('firebaseData',['$firebaseArray', '$location',  function($firebaseArray,$location){

            var service = {
                login : login,
                addUser : addUser,
                signup : signup
            }

            return service;

            function login(admin,objs){

                objs.forEach(function(item,index){
                    //console.log(item);
                    if(item.email==admin.email&&item.password==admin.password){
                        console.log('success');
                        $location.path('/signevent');
                    }else{
                        alert("Account doesn't exist or dismatched paswword");

                    }
                })
            }

            function signup(){

            }

            function addUser(admin,objs){
                objs.$add(admin);
                $location.path('/signevent');
                    //.then(function(objs){
                    //    objs.$save();
                    //}
                    //
                    //).then(function(){
                    //$location.path('/signevent')
                    //})
            }


        }])
})(angular);