(function() {
    angular
        .module('wedApp')
        .controller('guestController', guestController);

    function guestController() {
        vm = this;

        vm.logName = logName;

        vm.message = "message from guestController";
        vm.guestName = "name";

        function logName() {
        	console.log(vm.guestName);
        }
    }
})();