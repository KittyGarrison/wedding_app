var app = angular.module("wedApp",['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html'
    });

  $urlRouterProvider.otherwise('home');
}]);