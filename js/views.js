var app = angular.module('site', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: 'pages/home.html', controller: 'AddStudentController'
   }).
   
   when('/payment', {
      templateUrl: 'pages/payment.html', controller: 'ViewStudentsController'
   }).

   when('/clinician', {
      templateUrl: 'pages/clinician.html', controller: 'ViewStudentsController'
   }).

   when('/location', {
      templateUrl: 'pages/location.html', controller: 'ViewStudentsController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);