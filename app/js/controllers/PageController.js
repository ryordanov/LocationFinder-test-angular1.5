'use strict';

favoriteLocationsApp.controller('PageController',
    function PageController($scope, loadMapsData) {
        $scope.copyright = 'Блях';
        $scope.city = 'Shumen';
        $scope.latitude = 43.2712398;
        $scope.longitude = 26.93612859999996;

        $scope.initialize = function () {
            var map = new google.maps.Map(document.getElementById('map_div'), {
                center: { lat: $scope.latitude, lng: $scope.longitude },
                zoom: 10
            });
        }

        google.maps.event.addDomListener(window, 'load', $scope.initialize);

        // TODO: call $scope.initialize?
        $scope.updateMap = function () {
            loadMapsData.geocodeSrvcFn('Varna', function (cbResult) {
                $scope.latitude = cbResult.results[0].geometry.location.lat();
                $scope.longitude = cbResult.results[0].geometry.location.lng();
                $scope.initialize();

            });
        };
    }
);

//https://gps-coordinates.org/varna-latitude.php
