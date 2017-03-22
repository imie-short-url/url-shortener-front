minifyApp.controller('SignupController', function($scope, $http, API) {
    if(window.sessionStorage.getItem('token') !== '' && window.sessionStorage.getItem('token') !== null)
        $state.go('dashboard');

    $scope.user = {
        email: '',
        password: '',
        passwordConfirm: ''
    };

    $scope.errors = {
        ERR_EMAIL_INVALID: "L'adresse email n'est pas valide.",
        ERR_PASSWORD_INVALID: "Le mot de passe n'est pas valide.",
        ERR_EMAIL_EMPTY: "L'email est vide.",
        ERR_PASSWORD_EMPTY: "Le mot de passe est vide.",
        ERR_EMAIL_PASSWORD_EMPTY: "Email et mot de passe vides.",
        ERR_EMAIL_TAKEN: "L'email est déjà prise.",
        ERR_UNKNOWN: "Une erreur s'est produite."
    };

    $scope.error = "";

    $scope.sendForm = function() {
        $http({
            url: API.url+'/user/register',
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
            $state.go('signin');
        }, function errorCallback(response){
            $scope.error = $scope.errors[response.error] === undefined ? $scope.errors['ERR_UNKNOWN'] : $scope.errors[response.error];
        });
    };
});