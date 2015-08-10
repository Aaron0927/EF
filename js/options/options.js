var loginPage = angular.module('loginPage', ['ngRoute']);
loginPage.controller('loginController', function($scope){
});

loginPage.controller('registerController', function($rootScope){
    $rootScope.step = "register";

});

(function(){loginPage.controller('loginPageController', function($rootScope){
    $rootScope.step = "register";
});}).call(this);

loginPage.config(function($routeProvider){
        $routeProvider
        .when('/login', {
            controller: 'loginController',
            templateUrl: 'html/login.html'
        })
        .when('/register', {
            controller: 'registerController',
            templateUrl: 'html/register.html'
        })
        .otherwise({redirectTo: '/register'});

});

