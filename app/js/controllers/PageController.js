'use strict';

favoriteLocationsApp.controller('PageController',
    function PageController($scope, $rootScope, LocationService) {
        $scope.copyright = 'Блях';
        $scope.city = 'Shumen';
        $scope.latitude = 43.2712398;
        $scope.longitude = 26.93612859999996;

        $scope.renderMap = function () {
            var map = new google.maps.Map(document.getElementById('map_div'), {
                center: { lat: $scope.latitude, lng: $scope.longitude },
                zoom: 10
            });
        };
        
        $scope.updateMap = function () {
            LocationService.fetchMapData($scope.city, function (locationData) {
                $scope.latitude = locationData.lat;
                $scope.longitude = locationData.lng;
                
                $rootScope.$apply(function () {
                    $rootScope.$broadcast('locationUpdated', { currentCity: locationData.city });
                });
                
                $scope.renderMap();
            });
        };

        google.maps.event.addDomListener(window, 'load', $scope.updateMap);
    }
);
