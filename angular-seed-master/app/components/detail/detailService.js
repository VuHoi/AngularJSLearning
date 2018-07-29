angular.module('detail')
.factory('users',function($http,$q){
  
  var services={users:[],getUsers:getUsers,registerUser:registerUser,editUser:editUser,deleteUser:deleteUser};
   
  
  function getUsers(){
        var def = $q.defer();
        $http.defaults.headers.common['x-access-token']=localStorage.getItem('token');
        var headers = {
               'Access-Control-Allow-Origin': true,
               'Accept': 'application/json'
                 }
                   $http.get('http://localhost:3000/api/user',headers).then(function(data) {
                    services.users = data.data;
                   
                    def.resolve(data);
                })
                
                return def.promise;
    
    };


    function registerUser(username,email,role){
        var def = $q.defer();
        var headers = {
            'Access-Control-Allow-Origin': true,
            'Accept': 'application/json'
                 }
        var user={
            'username':username,
            'email':email,
            'password':'thatvuhai',
            'role':role
        }

        $http.post('http://localhost:3000/user',user,headers).then(function(data) {
        
        
        def.resolve(data);
    })
                
                return def.promise;
    
    };



    function editUser(username,email,role,id){
        var def = $q.defer();
        $http.defaults.headers.common['x-access-token']=localStorage.getItem('token');
        var headers = {
            'Access-Control-Allow-Origin': true,
            'Accept': 'application/json'
                 }
                
        var user={
            'username':username,
            'email':email,
           
            'role':role
        }

        $http.put('http://localhost:3000/api/user/'+id,user,headers).then(function(data) {
        
        
        def.resolve(data);
    })
                
                return def.promise;
    
    };
  
  

    function deleteUser(id){
        var def = $q.defer();
        $http.defaults.headers.common['x-access-token']=localStorage.getItem('token');
        var headers = {
            'Access-Control-Allow-Origin': true,
            'Accept': 'application/json'
                 }
                
      

        $http.delete('http://localhost:3000/api/user/'+id,headers).then(function(data) {
        
        
        def.resolve(data);
    })
                
                return def.promise;
    
    };
   
 
    return services;
})