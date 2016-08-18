angular.module('app')
    .controller('aboutCtrl', function($scope, $http, menuMaker){
        $scope.links = menuMaker.getMenu();
    });