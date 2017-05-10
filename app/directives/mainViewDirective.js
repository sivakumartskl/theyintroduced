mainModule.directive('mainViewDirective', function () {
    return {
        restrict : "AE",
        templateUrl : "app/directives/mainView.html",
        contoller: 'mainViewController',
        controllerAs: 'vm'
    };
});