function initMap() {
    // Define the center coordinates for Himachal Pradesh
    const himachalPradeshCenter = { lat: 31.7947, lng: 77.2650 };

    // Create a map centered on Himachal Pradesh
    const map = new google.maps.Map(document.querySelector('.map-container'), {
        zoom: 7,
        center: himachalPradeshCenter
    });

    // You can add additional markers or map features here
}

// Optionally, you can add more JavaScript code for your vehicle tracking project here.
