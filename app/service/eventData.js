/**
 * Created by jakey on 2017/5/1.
 */
(function (angular) {
    angular.module('myApp.service.eventData',[])
        .service('eventData',function($http, $log){
            this.getEvent=function(successcb){
                $http({
                    method:'get',
                    url:'data/1.json'
                }).
                success(function(data){
                    successcb(data);
                }).
                error(function(data){
                    $log.warn(data,status,header.config);
                    alert(data);
                })
            }
        });

})(angular);