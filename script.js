
const map = L.map('map').setView([44.6409, -63.963], 11);  // Centered on St. Margaret’s Bay

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample marker
const marker = L.marker([44.639, -63.970]).addTo(map);
marker.bindPopup("<b>Marg’s Pick:</b><br>Try the rhubarb lemonade at Judy’s Jam Stand!");
