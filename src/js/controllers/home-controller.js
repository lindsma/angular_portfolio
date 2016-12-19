angular.module('portfolioApp').controller('HomeController', function($scope, $state, $location) {

    $scope.showHomeMenu = false;

    $scope.toggleHomeMenu = function(page) {
      page = page || '';
        if ($(window).width() < 461 && page !== '') {
            $state.go(page);
            $scope.showHomeMenu = !$scope.showHomeMenu;
        } else if ($(window).width() < 461 && page === '') {
          $scope.showHomeMenu = !$scope.showHomeMenu;
        }
    };

});
