// Initialize the map centered on Ormskirk
var map = L.map('map').setView([53.5656, -2.8941], 13); // Centered on Ormskirk

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom Material Icon for the pins (using the restaurant icon as an example)
var locationIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [40, 40],  // Adjust size of the icon
    iconAnchor: [20, 40],  // Anchor the icon at the bottom
    popupAnchor: [0, -40],  // Position the popup above the pin
    html: '<span class="material-icons" style="font-size: 30px; color: black;">place</span>', // Material icon for location pin
});

// Locations array
var locations = [
    {
        name: "Doggie Walks Ormskirk",
        address: "3-5 St Helens Road, Ormskirk, L35 4PO",
        coords: [53.5656, -2.8941], // Ormskirk coordinates
    },
    {
        name: "Doggie Walks Southport",
        address: "150 Lord Street, Southport, PR9 0NP",
        coords: [53.6445, -3.0043], // Southport coordinates
    },
    {
        name: "Doggie Walks Warrington",
        address: "47 Old Liverpool Road, Warrington, WA5 1AF",
        coords: [53.3894, -2.5980], // Warrington coordinates
    }
];

// Add markers for each location
locations.forEach(function(location) {
    L.marker(location.coords, { icon: locationIcon }).addTo(map)
        .bindPopup(`
            <h3>${location.name}</h3>
            <p>${location.address}</p>
        `);
});
