
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbmRhbmE0ODQiLCJhIjoiY2tyZGZucHE2MXBrYTJ3cDhpZXVwdGhtNCJ9.ZU7-LDhPKJIu9c6c06OZ3g';



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([72.877656, 19.075984])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 5
  });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    
    // Create a default Marker and add it to the map.
    var marker1 = new mapboxgl.Marker({ color: 'black'})
    .setLngLat([83.18975273628007, 18.182637669729765])
    .addTo(map);
    
    var marker1 = new mapboxgl.Marker({ color: 'blue'})
    .setLngLat([78.45880313984652, 17.940765883901463])
    .addTo(map);
    
    var marker1 = new mapboxgl.Marker({ color: 'red'})
    .setLngLat([77.53063408108272, 13.574052994915352])
    .addTo(map);
    
    var marker1 = new mapboxgl.Marker({ color: 'green'})
    .setLngLat([80.25290190413348, 13.34820383065126])
    .addTo(map);
}