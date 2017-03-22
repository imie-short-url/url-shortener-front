minifyApp.controller('SigninController', function($scope, $http, API, $state) {
	if(window.sessionStorage.getItem('token') !== '' && window.sessionStorage.getItem('token') !== null)
        $state.go('dashboard');

	$scope.user = {
		email: '',
		password: ''
	};

	$scope.errors = {
        ERR_BAD_CREDENTIAL: "Adresse email ou mot de passe incorrecte.",
        ERR_EMAIL_AND_PASSWORD_REQUIRED: "L'adresse email et le mot de passe sont requis.",
        ERR_UNKNOWN: "Une erreur s'est produite."
    };

    $scope.error = "";

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
			window.sessionStorage
				.setItem('email', $scope.user.email)
				.setItem('token', $response.token);
			$state.go('dashboard');
		}, function errorCallback(response){
			$scope.error = $scope.errors[response.error] === undefined ? $scope.errors['ERR_UNKNOWN'] : $scope.errors[response.error];
		});
	};
});