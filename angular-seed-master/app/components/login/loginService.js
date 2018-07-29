angular.module('login')
.service('loginForm',function($http,$state,$rootScope){
    this.login=function(Email,Password){
        $http.defaults.headers.common['x-access-token']=localStorage.getItem('token');  
        var headers = {
         'Access-Control-Allow-Origin': true,
         'Accept': 'application/json;'
           }

  var data={
      email:Email,
      password:Password
  }


  $http.post('http://localhost:3000/login',data,headers)
  .then(function(response){
    if(response.data!=="")
        {  localStorage.setItem("token",response.data.token);
            $state.go('detail');
            $rootScope.title="Detail";

        }
     else{
       $rootScope.loginFail=true;
     }
   })
    }
})