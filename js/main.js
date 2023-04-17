// Initialize the map


function initMap(){

    const map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 8, // Set the zoom level
      center: { lat: -34.397, lng: 150.644 }, // Set the center of the map
    });
    
    console.log('map: ', map);

}    




