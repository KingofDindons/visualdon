import {
  geoOrthographic,
  geoMercator,
  geoPath,
  select,
  timer,
  
} from 'd3'
import collection from './data.json'

const WIDTH = 1000
const HEIGHT = 500

const svg = select('#map').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const paths = svg.selectAll('path')
  .data(collection.features)
  .enter()
  .append('path')

// paths.on('mouseover', e => {
//   select(e.target).attr('fill', 'red')
// })

// paths.on('mouseout', e => {
//   select(e.target).attr('fill', 'black')
// })


const tick = () => {
 
  const projection = geoMercator()
    .fitExtent([[0, 0], [WIDTH, HEIGHT]], collection)
    
  const pathCreator = geoPath().projection(projection)
  paths.attr('d', pathCreator)
}

timer(tick)