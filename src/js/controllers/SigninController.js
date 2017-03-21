minifyApp.controller('SigninController', function($scope, $http, API) {
	$scope.user = {
		email: '',
		password: ''
	};

	$scope.sendForm = function(){
		$http({
			url: API.url+'/user/login',
			method: 'POST',
			headers: {
			   'Content-Type': 'application/json'
			},
			data: {
				login: $scope.user,
				password: $scope.password
			}
		}).then(function successCallback(response){
			sessionStorage
				.setItem('logged', true)
				.setItem('email', $scope.user.email);
				// Add tocken in session
			//TODO redirect user to dashboard
		}, function errorCallback(response){
			$scope.user.email = '';
			$scope.user.password = '';
			// TODO Show an error message and clear field
		});
	};
});