import {
  geoOrthographic,
  geoMercator,
  geoPath,
  select,

} from 'd3'
import collection from './data.json'

const WIDTH = 1000
const HEIGHT = 500

const svg = select('#map').append('svg')
  .attr('viewBox', `0 -10 ${WIDTH} ${HEIGHT}`)


svg.append("rect").attr("height",HEIGHT).attr("width",WIDTH).attr("fill","blue")

const paths = svg.selectAll('path')
  .data(collection.features)
  .enter()
  .append('path').attr("fill", "blue")



paths.on('mouseout', e => {
  select(e.target).attr('stroke', 'white')
})



const drw = () => {
  const projection = geoMercator()
    .fitExtent([[0, 0], [WIDTH, HEIGHT]], collection)
  const pathCreator = geoPath().projection(projection)
  paths.attr('d', pathCreator)
}

drw()