const minifyApp = angular.module('MinifyApp', ['ngMaterial', 'ui.router', 'ngMessages']);

minifyApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin');
    $stateProvider
    .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: "SignupController as signupController",
        data: {
            pageTitle: 'Créer un compte'
        }
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


particlesJS.load('particles', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

minifyApp.directive('confirmPwd', function($interpolate, $parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModelCtrl) {

      var pwdToMatch = $parse(attr.confirmPwd);
      var pwdFn = $interpolate(attr.confirmPwd)(scope);

      scope.$watch(pwdFn, function(newVal) {
          ngModelCtrl.$setValidity('password', ngModelCtrl.$viewValue == newVal);
      })

      ngModelCtrl.$validators.password = function(modelValue, viewValue) {
        var value = modelValue || viewValue;
        return value == pwdToMatch(scope);
      };

    }
  }
});

minifyApp.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Racourcisseur de liens';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);