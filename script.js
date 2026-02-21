function initMap() {
    var location = { lat: 17.1134824, lng: 82.2435373 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
} 