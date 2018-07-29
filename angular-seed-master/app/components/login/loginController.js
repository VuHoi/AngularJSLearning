'use strict';


    
angular.module('login',[])
 .controller('login-form', function($scope,loginForm,$rootScope) {
     $rootScope.control="Add";
     $scope.username = "";
     $scope.password = "";
     $rootScope.loginFail=false;
     $scope.login=function(){loginForm.login($scope.username,$scope.password)}
 })