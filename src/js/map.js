// MAP
var map = L.map("map").setView([44.8873868858456, 20.45131738180942], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([44.8873868858456, 20.45131738180942])
  .addTo(map)
  // .bindPopup("Home")
  .openPopup();
