minifyApp.controller('SignupController', function($scope, $http) {
    $scope.user = {
        email: '',
        password: '',
        passwordConfirm: ''
    }

    $scope.sendForm = function() {
    	if($scope.signupForm.$valid) {
    		console.log('sent');
    	} else {
    		console.log('nope');
    	}
    };
});