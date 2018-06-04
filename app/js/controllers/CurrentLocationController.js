'use strict';

favoriteLocationsApp.controller('CurrentLocationController',
    function CurrentLocationController($scope, $rootScope, LocationService) {
        $scope.currentCity = '';

        $scope.$on('locationUpdated', function (event, data) {
            $scope.currentCity = data.currentCity;
        });
    });
