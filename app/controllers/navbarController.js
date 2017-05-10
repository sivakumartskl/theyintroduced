navbar.controller('navbarController', function ($scope) {
    var vm = this;
    vm.showPersonsObjects = function (event) {
        event.preventDefault();
        alert("Hi, you pressed the key...");
    };
});