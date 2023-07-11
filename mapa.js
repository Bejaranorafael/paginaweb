function initMap() {
  // Coordenadas de la ubicación en Buenos Aires, Capital Federal
  var vetLocation = { lat: -34.64223, lng: -58.41772 };

  // Crear mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    center: vetLocation,
    zoom: 15
  });

  // Marca en el mapa
  var marker = new google.maps.Marker({
    position: vetLocation,
    map: map,
    title: 'Veterinaria'
  });
}

  