'use strict';

favoriteLocationsApp.controller('PageController',
    function PageController($scope) {
        $scope.copyright = 'Блях';

        $scope.initialize = function () {

            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': $scope.city || 'Shumen' }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    $scope.latitude = results[0].geometry.location.lat();
                    $scope.longitude = results[0].geometry.location.lng();
                    // var geolocate = new google.maps.LatLng(latitude, longitude);

                    var map = new google.maps.Map(document.getElementById('map_div'), {
                        center: { lat: $scope.latitude, lng: $scope.longitude },
                        zoom: 10
                    });
                }
            });
        }
        $scope.updateMap = function () {
            
        };
        google.maps.event.addDomListener(window, 'load', $scope.initialize);


    }
);

//https://gps-coordinates.org/varna-latitude.php
