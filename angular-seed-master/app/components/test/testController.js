'use strict';


    
angular.module('login',[])
.run(function(){
    String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    }
})
 .controller('test', function($scope,$rootScope) {
     $scope.test=" ";
     $scope.open=false;
 $scope.onBlurClock=function(a){
let length=($scope.test+'').length;

 if(length<5&&a.$valid){
     if(length===3)$scope.test ='0'+$scope.test;
     $scope.test =($scope.test+'').splice(2, 0, ":");
 }
console.log(a);
 }

//  $scope.$watch('test', function(newValue, oldValue) {
//     $scope.change();
//   });

 $scope.click=function(){
    $scope.test=$scope.test+1;  
  
 }


//  $scope.change=function(){
//      console.log($scope.test)
//  }

 })