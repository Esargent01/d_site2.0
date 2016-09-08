var app = angular.module('site', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: 'pages/home.html', controller: 'homeCtrl'
   }).
   
   when('/payment', {
      templateUrl: 'pages/payment.html', controller: 'paymentCtrl'
   }).

   when('/clinician', {
      templateUrl: 'pages/clinician.html', controller: 'clinicianCtrl'
   }).

   when('/location', {
      templateUrl: 'pages/location.html', controller: 'locationCtrl'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);

app.directive('contactForm',function(){
	return {
		restrict : 'E',
		templateUrl : 'components/contact-form.html',
		link : function(){
		    $('.showAppt').click(function(){
		        $('.header-form').animate({left:'0'});
		    });
		    $('.header-form .close').click(function(){
		    	$('.header-form').animate({left:'60%'});
		    });
		}
	};
});

app.controller('homeCtrl', function($scope){
	$scope.pageClass = 'page-home';
});

app.controller('paymentCtrl', function($scope){
   $scope.pageClass = 'page-payment';
});

app.controller('clinicianCtrl', function($scope){
   $scope.pageClass = 'page-clinician';
});

app.controller('locationCtrl', function($scope){
   $scope.pageClass = 'page-location';
});
