navbar.directive('navbarDirective', function () {
    return {
        restrict : "AE",
        templateUrl : "app/directives/navbar.html",
        contoller: 'navbarController',
        controllerAs: 'vm'
    };
});