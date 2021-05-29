import L from 'leaflet'
import bar from './bar.json'

const map = L.map('map').setView([46.78104, 6.64707], 9)

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map)

// const icon = L.icon({
//   iconUrl: 'https://heig-datavis-2021.surge.sh/carte-leaflet/arbre.png',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// })

// bar.map(d => {
//   const [lon, lat] = d
//   L.marker([lat, lon]).addTo(map)
// })

L.geoJSON(
  bar,
  {
  
    onEachFeature: (feature, layer) =>
      layer.bindPopup("Bar:" + feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
  },
).addTo(map)