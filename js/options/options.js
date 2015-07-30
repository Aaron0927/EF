var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('loginController', function($scope){
    
    $scope.pets = [
        {name: 'Dog', price: 200},
        {name: 'Cat', price: 220},
        {name: 'Rabbit', price: 180},
        {name: 'Parrot', price: 240}
    ];

});

myApp.controller('petController1', function($scope){
    $scope.pets = [
        {name: 'Dog', price: 200},
        {name: 'Cat', price: 220},
        {name: 'Rabbit', price: 180},
        {name: 'Parrot', price: 240}
    ];

});

myApp.config(function($routeProvider){
        $routeProvider
        .when('/', {
            controller: 'loginController',
            templateUrl: 'html/login.html'
        })
        .when('/price', {
            controller: 'petController1',
            templateUrl: 'view2.html'
        })
        .otherwise({redirectTo: '/'});

});

