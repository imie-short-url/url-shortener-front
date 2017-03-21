const minifyApp = angular.module('MinifyApp', ['ngMaterial', 'ui.router']);

minifyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin');
    $stateProvider
    .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: "SignupController as signupController"
    })
    .state('signin', {  
        url: '/signin',
        templateUrl: 'views/signin.html',
        controller: "SigninController as signinController"
    })
    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: "DashboardController as dashboardController"
    });
});
