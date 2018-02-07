angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    }).state('packages',{
      url:'/packages',
      templateUrl: 'app/packages/packagesTmpl.html',
      controller:'packagesCtrl'
    }).state('locations',{
      url:'/locations',
      templateUrl: 'app/locations/locationsTmpl.html',
      controller: 'locationsCtrl'
    }).state('booked/:id',{
      url:'/booked',
      templateUrl: 'app/booked/bookedTmpl.html',
      controller:'bookedCtrl'
    }).state('adventurers',{
      url:'/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    }).state('contact',{
      url:'/contact',
      templateUrl: 'app/contact/contactTmpl.html',
      parent:'home'
    })

  $urlRouterProvider
    .otherwise('/');
});
