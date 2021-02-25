const fs = require('fs')
const exporter = require('./export')
const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk');

// fs.writeFile('newfile.txt','Welcome to new file', (err)=> err)

// fs.writeFileSync('newfile.txt', 'Welcome to new file-sync')


// fs.appendFile('newfile.txt', '   hiiii!', err=>err)

// fs.appendFileSync('newfile.txt', '   hellooo!')

console.log(exporter.name)

const sum = exporter.add(5,5)
console.log(sum)

console.log(notes())

console.log(validator.isEmail('example.com'))

console.log(validator.isURL('www.google.com'))

console.log(chalk.bgBlue.green('Success!'));