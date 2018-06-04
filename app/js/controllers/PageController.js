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

        $scope.updateMap = function () {
            loadMapsData.geocodeSrvcFn($scope.city, function (cbResult) {
                if (cbResult.success) {
                    $scope.latitude = cbResult.results[0].geometry.location.lat();
                    $scope.longitude = cbResult.results[0].geometry.location.lng();
                    $scope.initialize();
                } else {
                    console.log(cbResult.err);
                }
            });
        };
    }
);

//https://gps-coordinates.org/varna-latitude.php
