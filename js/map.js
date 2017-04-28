// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(51.32, 21.9465),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var content = '<div id="rz-container">' +
        '<div class="rz-title">Ministerstwo Smaku u Rzetelskich</div>' +
        '<div class="rz-subTitle">Położenie</div>' +
        '<p>Restauracja & Pizzeria znajdują sie 100m od rynku na rogu ulic Nadrzecznej i Plebanki.</p>' +
        '<a href="https://www.google.pl/maps/dir//U+Rzetelskich+-+Ministerstwo+Smaku,+Nadrzeczna+14,+24-120+Kazimierz+Dolny/@51.3208132,21.9466576,18.86z/data=!4m15!1m6!3m5!1s0x0:0x1d68f155c7f8c3bd!2sU+Rzetelskich+-+Ministerstwo+Smaku!8m2!3d51.320843!4d21.946722!4m7!1m0!1m5!1m1!1s0x47227d93c8f58f4d:0x1d68f155c7f8c3bd!2m2!1d21.946722!2d51.3208427?hl=pl" target="_blank"> Wyznacz trasę</a>' +
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: content,

        // Assign a maximum value for the width of the infowindow allows
        // greater control over the various content elements
        maxWidth: 350
      });
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.3205, 21.947),
        map: map,
        icon: 'imgs/icons/map-marker-icon.png',
        title: 'Ministerstwo Smaku u Rzetelskich!'
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
    });
  };
