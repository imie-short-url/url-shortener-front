minifyApp.controller('DashboardController', function($scope, $state, $mdToast, $http, API) {
	if(window.sessionStorage.getItem('token') === '' || window.sessionStorage.getItem('token') === null)
		$state.go('signin');

	$scope.errors = {
		ERR_INVALID_TOKEN: 'Jeton incorrecte.',
        ERR_URL_NOT_FOUND: 'Adresse web introuvable.',
        ERR_URL_INVALID: 'L\'adresse incorrecte.',
        RESOURCE_NOT_FOUND: 'La ressource est introuvable.',
        ERR_FORBIDDEN: 'Vous n\'êtes pas authorisé à accéder à ce contenu.',
        ERR_UNKNOWN: "Une erreur s'est produite."
    };
    $scope.error = "";

    $scope.url = "";

	$scope.copy = function(id){
		$mdToast.show(
			$mdToast.simple()
				.textContent('Copié dans le presse-papier')
				.position('top center')
				.hideDelay(3000)
		);
	};

	$scope.add = function(){
		$http({
			url: API.url+'/url/',
			method: 'POST',
			headers: {
			   'Content-Type': 'application/json',
			   'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
			},
			data: {
				url: $scope.url
			}
		}).then(function successCallback(response){
			$scope.url = "";
			$scope.load();
			$mdToast.show(
				$mdToast.simple()
					.textContent('Adresse web ajoutée')
					.position('top center')
					.hideDelay(3000)
			);
		}, function errorCallback(response){
			$scope.error = $scope.errors[response.error] === undefined ? $scope.errors['ERR_UNKNOWN'] : $scope.errors[response.error];
		});
	};

	$scope.delete = function(id){
		$http({
			url: API.url+'/url/'+id,
			method: 'DELETE',
			headers: {
			   'Content-Type': 'application/json',
			   'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
			},
			data: {}
		}).then(function successCallback(response){
			$scope.load();
			$mdToast.show(
				$mdToast.simple()
					.textContent('Supprimé')
					.position('top center')
					.hideDelay(3000)
			);
		}, function errorCallback(response){
			$scope.error = $scope.errors[response.error] === undefined ? $scope.errors['ERR_UNKNOWN'] : $scope.errors[response.error];
		});
	};

	$scope.load = function(){
		$http({
			url: API.url+'/url/'+window.sessionStorage.getItem('token'),
			method: 'GET',
			headers: {
			   'Content-Type': 'application/json',
			   'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
			},
			data: {}
		}).then(function successCallback(response){
			$scope.shortUrls = response;
			$mdToast.show(
				$mdToast.simple()
					.textContent('Supprimé')
					.position('top center')
					.hideDelay(3000)
			);
		}, function errorCallback(response){
			$scope.error = $scope.errors[response.error] === undefined ? $scope.errors['ERR_UNKNOWN'] : $scope.errors[response.error];
		});
	};

	//$scope.load();
	$scope.shortUrls = [
		{
			url: "http://facebook.com/test",
			shortcode: "ae45bc4"
		},{
			url: "http://google.com/?q=345",
			shortcode: "ac98bc4"
		},{
			url: "http://facebook.com/test",
			shortcode: "bea34a3"
		},
	]

});