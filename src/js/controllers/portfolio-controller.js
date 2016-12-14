angular.module('portfolioApp').controller('PortfolioController', function($scope, $state, $location) {

$scope.showMenu = false;

$scope.toggleMenu = function() {
  $scope.showMenu = !$scope.showMenu;
};

});
