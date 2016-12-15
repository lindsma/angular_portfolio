angular.module('portfolioApp').controller('WorkController', function($scope, $state, $location) {

var promise = $.get('src/data/work.json');

promise.then(function(response) {
  $scope.projects = response.projects;
  $scope.$apply();
});

});
