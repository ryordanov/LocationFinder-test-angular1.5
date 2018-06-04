'use strict';

favoriteLocationsApp.factory('LocationService', function () {
    var that = this;

    that.city = '';

    that.geocodeSrvcFn = function (address, outerCallback) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                outerCallback({ success: true, err: null, results: results });
            } else {
                outerCallback({ success: false, err: new Error('#ERROR (Geocode was not successful): ' + status), results: null });
            }
        });
    };

    that.fetchMapData = function (city, updateMapCB) {
        let loc = {
            city: '',
            lat: 0,
            lng: 0
        };

        that.geocodeSrvcFn(city, function (cbResult) {
            if (cbResult.success) {
                // that.city = cbResult.results[0].formatted_address;
                loc.city = cbResult.results[0].formatted_address;
                loc.lat = cbResult.results[0].geometry.location.lat();
                loc.lng = cbResult.results[0].geometry.location.lng();

                updateMapCB(loc);
            } else {
                console.log(cbResult.err);
            }
        });
    };

    that.getCurrentCity = function() {
        return that.city;
    };

    return {
        fetchMapData: that.fetchMapData
        // getCurrentCity: that.getCurrentCity,
        // city: that.city
    };
})
