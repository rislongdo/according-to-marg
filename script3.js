
const map = L.map('map').setView([44.65, -63.85], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to generate Marg-style popups with optional link
function margPopup(name, description, url = null) {
  let link = url ? `<br><a href="${url}" target="_blank" rel="noopener noreferrer">🌐 Visit Website</a>` : '';
  return `<b>🐚 Marg’s Pick: ${name}</b><br>${description}${link}`;
}

// Cavicchi’s
L.marker([44.6595, -63.8087]).addTo(map)
  .bindPopup(margPopup("Cavicchi’s Meats & Eats", "Wonderful food, great service, and local items galore."));

// Rustic Crust
L.marker([44.6475, -63.8655]).addTo(map)
  .bindPopup(margPopup(
    "The Rustic Crust",
    "Amazing stone oven pizza, funky vibes, a real Marg classic.",
    "https://www.therusticcrustpizzeria.ca"
  ));

// The Finer Diner
L.marker([44.5025, -63.9189]).addTo(map)
  .bindPopup(margPopup("The Finer Diner", "Ocean view, never too busy—Marg’s go-to when she wants peace with her pancakes."));
