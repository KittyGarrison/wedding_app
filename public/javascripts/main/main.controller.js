(function() {
    angular
        .module('wedApp')
        .controller('mainController', mainController);

    function mainController() {
        vm = this;
        
        vm.message = "message from mainController";
    }
})();