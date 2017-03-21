minifyApp.controller('SignupController', function($scope, $http) {
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
        ERR_EMAIL_TAKEN: "L'email est déjà prise."
    };

    $scope.error = "";

    $scope.sendForm = function() {
        $scope.error = $scope.errors.ERR_EMAIL_TAKEN;
    };
});