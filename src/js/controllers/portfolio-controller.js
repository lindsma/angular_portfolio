angular.module('portfolioApp').controller('PortfolioController', function($scope, $state, $location) {

    $scope.showMenu = false;

    $scope.toggleMenu = function(page) {
      page = page || '';
        if ($(window).width() < 631 && page !== '') {
            $state.go(page);
            $scope.showMenu = !$scope.showMenu;
        } else if ($(window).width() < 631 && page === '') {
          $scope.showMenu = !$scope.showMenu;
        }
    };

});
