const xlsx = require('xlsx')

const file = xlsx.readFile('data.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])


const filtre = json.filter(d => d.Kanton === "VD")
const filtre2 = filtre.filter(d=>d.Bahnhof_Haltestelle[0] === "A")
const map = filtre2.map(d => ({
    Ville: d.Bahnhof_Haltestelle,
    DTV:d.DTV_2018,
}))

console.log(JSON.stringify(map))

//  node .\preparer.js > data.json