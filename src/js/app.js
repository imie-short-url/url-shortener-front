const minifyApp = angular.module('MinifyApp', ['ngMaterial', 'ui.router']);

minifyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: "SignupController as signupController"
    });
});
