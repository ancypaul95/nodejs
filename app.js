const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const exporter = require('./export')
const notes = require('./notes-app/notes')

// write value to a new file

// fs.writeFile('newfile.txt','Welcome to new file', (err)=> err)
// fs.writeFileSync('newfile.txt', 'Welcome to new file-sync')

// append value to a new file

// fs.appendFile('newfile.txt', '   hiiii!', err=>err)
// fs.appendFileSync('newfile.txt', '   hellooo!')

// importing custom files

// console.log(exporter.name)
// const sum = exporter.add(5,5)
// console.log(sum)
// console.log(notes())

// use of npm modules

// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('www.google.com'))
// console.log(chalk.bgBlue.green('Success!'));

// command line args using process

// const command = process.argv[2]
// if(command === 'add'){
//   console.log("Adding Note!")
// }
// else if(command === 'remove'){
//   console.log('Remove Note!')
// }

// command line args using yargs
// customize yargs version

yargs.version('1.0.1')

// add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Title for note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Description for note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({title, body}) =>{
    notes.addNote(title,body)
  }
})

// remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Title for note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({title}) =>{
    notes.removeNote(title)
  }
})

// list command

yargs.command({
  command: 'list',
  describe: 'List notes!',
  handler: () =>{
    notes.listNotes()
  }
})

// read command

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Title for note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({title}) =>{
    notes.readNote(title)
  }
})

// console.log(yargs.argv)
yargs.parse()
