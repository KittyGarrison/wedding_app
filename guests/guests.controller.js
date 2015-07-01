(function() {
    angular
        .module('wedApp')
        .controller('guestController', guestController);

    function guestController() {
        vm = this;
        
        vm.message = "message from guestController";
    }
})();