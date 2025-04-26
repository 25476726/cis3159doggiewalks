
var map = L.map('map').setView([53.5656, -2.8941], 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locationIcon = L.divIcon({
    className: 'material-icons',
    iconSize: [40, 40],  
    iconAnchor: [20, 40],  
    popupAnchor: [0, -40],  
    html: '<span class="material-icons" style="font-size: 30px; color: black;">pets</span>', 
});

var locations = [
    {
        name: "Doggie Walks Ormskirk",
        address: "3-5 St Helens Road, Ormskirk, L35 4PO",
        coords: [57.4718, -2.9835], 
    },
    {
        name: "Doggie Walks Southport",
        address: "150 Lord Street, Southport, PR9 0NP",
        coords: [53.7173, -2.9957], 
    },
    {
        name: "Doggie Walks Warrington",
        address: "47 Old Liverpool Road, Warrington, WA5 1AF",
        coords: [53.3883, -2.6093], 
    }
];

locations.forEach(function(location) {
    L.marker(location.coords, { icon: locationIcon }).addTo(map)
        .bindPopup(`
            <h3>${location.name}</h3>
            <p>${location.address}</p>
        `);
});
