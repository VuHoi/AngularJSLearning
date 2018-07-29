'use strict';

angular.module('routingDemoApp',[
	'ui.router',
	'detail',
	'login'
])



.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
				// For any unmatched url, send to /business
				$urlRouterProvider.otherwise("/")
				
				$stateProvider
						.state('login', {
							url: "/",
							templateUrl: "./components/login/login.html",
							
						})
						.state('detail', {
							url: "/detail",
							templateUrl: "./components/detail/detail.html",
							resolve: {
								delay: function($q, $timeout) {
								  var delay = $q.defer();
								  $timeout(delay.resolve, 1000);
								  return delay.promise;
								}
							  }
						})
						
					
						$locationProvider.html5Mode(true).hashPrefix('!');
					
			}])
.run(function($rootScope,$transitions) {
	$rootScope.logged=false;
	$transitions.onStart({ }, function(trans) {
		$rootScope.logged=true;
	}
	)

	$transitions.onSuccess({}, function() {
		$rootScope.logged=false;
	  });
	  
}).controller('app',function($rootScope){
	$rootScope.title="Sign In"
})

			