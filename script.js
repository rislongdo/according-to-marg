
const map = L.map('map').setView([44.6409, -63.963], 11);  // Centered on St. Margaret’s Bay

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to create a popup with Marg’s shell of approval
function margPopup(name, description) {
  return `<b>🐚 Marg’s Pick: ${name}</b><br>${description}`;
}

// Cavicchi’s
L.marker([44.6595, -63.8087]).addTo(map)
  .bindPopup(margPopup("Cavicchi’s Meats & Eats", "Wonderful food, great service, and local items galore."));

// Rustic Crust
L.marker([44.6475, -63.8655]).addTo(map)
  .bindPopup(margPopup("The Rustic Crust", "Amazing stone oven pizza, funky vibes, a real Marg classic."));

// The Finer Diner
L.marker([44.5025, -63.9189]).addTo(map)
  .bindPopup(margPopup("The Finer Diner", "Ocean view, never too busy—Marg’s go-to when she wants peace with her pancakes."));
