angular.module('portfolioApp').controller('PortfolioController', function($scope, $state, $location) {

// function checkUrl() {
//   if ($location.$$url === '/home') {
//     this.home = true;
//   } else if ($location.$$url !== '/home'){
//     this.home = false;
//   }
// }

$scope.toggleActive = function(page) {
  if (page == 'about') {
    $scope.about = true;
    $scope.contact = false;
    $scope.work = false;
  } else if (page == 'contact') {
    $scope.about = false;
    $scope.contact = true;
    $scope.work = false;
  } else if (page == 'work') {
    $scope.about = false;
    $scope.contact = false;
    $scope.work = true;
  } else {
    $scope.about = false;
    $scope.contact = false;
    $scope.work = false;
  }
};



// checkUrl();


});
