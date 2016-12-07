(function($) {
  "use strict";

  var portfolioApp = angular.module('portfolioApp', ['ui.router']);

  portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('PortfolioParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('PortfolioParent.about', {
          url: 'about',
          // controller: 'HomeController as home',
          templateUrl: 'src/templates/about.html'
      }).state('PortfolioParent.contact', {
          url: 'contact',
          // controller: 'AllProjectsController as allProjects',
          templateUrl: 'src/templates/contact.html'
      }).state('PortfolioParent.work', {
          url: 'work',
          // controller: 'ClientDashboardController as clientDashboard',
          templateUrl: 'src/templates/work.html'
      });

    });


})(jQuery);
