var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
        $routeProvider
        .when('/', {
                        controller: 'petController',
                                    templateUrl: 'view1.html'
                                            
        })
        .when('/price', {
                        controller: 'petController',
                                    templateUrl: 'view2.html'
                                            
        })
                .otherwise({redirectTo: '/'});

});
