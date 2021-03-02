const fs = require('fs')

// const book = {
//   title: "New book",
//   author: "Ancy"
// }

// const bookJSON = JSON.stringify(book) // return json object
// const parsedJSON = JSON.parse(bookJSON) // return parsed object
// console.log(parsedJSON)

// fs.writeFileSync('1-json.json',bookJSON) //write to external file

const dataBuffer = fs.readFileSync('1-json.json') // read from external file as buffers
const bufferedJSON = dataBuffer.toString() // convert to json format
const data = JSON.parse(bufferedJSON) // parsed to object

data.name = 'Ancy' //overwrite name
data.age = 26 //overwrite age

const stringifyData = JSON.stringify(data)
fs.writeFileSync('1-json.json',stringifyData) 