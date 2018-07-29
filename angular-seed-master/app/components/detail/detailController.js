

    'use strict';


    
   angular.module('detail',[])
    .controller('detail', function($scope,$rootScope,users) {
        
        $rootScope.title="Detail";




        
      
        $rootScope.control="add";
       
        

      
        $scope.add=function(){
            $rootScope.control="add";
            $rootScope.content="Create new user";
            
           
        }


        $scope.remove=function(){
           
        }
    })
    .controller('table', function($scope,$rootScope,users) {
        $rootScope.users=[];
       
        $rootScope.index=0;
        users.getUsers().then(function(response){
            $rootScope.users=response.data
         });

         
         $scope.edit=function(i){
            $rootScope.control="edit";
            $rootScope.content="Edit current user";
            $rootScope.username=$rootScope.users[i].username;
            $rootScope.role=$rootScope.users[i].role;
            $rootScope.email=$rootScope.users[i].email;
            $rootScope.index=i;
            
         }

         $scope.remove=function(i){
           
            $rootScope.index=i;
            
         }
        
       
    })
    .controller('modal', function($scope,$rootScope,users) {
       
        $rootScope.username="";
        $rootScope.role="";
        $rootScope.email="";
      
       
        $scope.editUser=function(){
         if($rootScope.control==='edit') {
            users.editUser($rootScope.username,$rootScope.email,$rootScope.role,$rootScope.users[$rootScope.index]._id).then(function(data){
                $rootScope.users[$rootScope.index]=data.data;
                
            });
        }
        else{
            users.registerUser($rootScope.username,$rootScope.email,$rootScope.role).then(function(data){
                $rootScope.users.push(data.data);
            });
        }
           
        }
    }).controller('confirm',function($scope,$rootScope,users){


        
        $scope.remove=function(){
             users.deleteUser($rootScope.users[$rootScope.index]._id).then(function(data){
                $rootScope.users.splice($rootScope.index,1);
             })
            
        }
    });
   


    

