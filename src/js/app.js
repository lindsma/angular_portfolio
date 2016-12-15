(function($) {
  "use strict";

  var portfolioApp = angular.module('portfolioApp', ['ui.router']);

  portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('PortfolioParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('PortfolioParent.home', {
          url: 'home',
          templateUrl: 'src/templates/home.html'
      }).state('PortfolioParent.about', {
          url: 'about',
          templateUrl: 'src/templates/about.html'
      }).state('PortfolioParent.contact', {
          url: 'contact',
          templateUrl: 'src/templates/contact.html'
      }).state('PortfolioParent.work', {
          url: 'work',
          controller: 'WorkController as work',
          templateUrl: 'src/templates/work.html'
      });

    });


})(jQuery);
