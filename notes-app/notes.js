const fs = require('fs')

const addNote = (title,body) =>{
  const notes = loadNotes()
  if(notes.some((note)=>note.title === title)){
    console.log("Duplicate title")
  }else{
    notes.push({
      title,
      body
    })
    saveNotes(notes)
  }
}

const removeNote = (title) =>{
  const notes = loadNotes()
  const removedNotes = notes.filter((note)=>note.title !== title)
  saveNotes(removedNotes)
  if(notes.length > removedNotes.length){
    console.log("Note removed")
  }
  else{
    console.log("No note exists")
  }
}

const listNotes = () =>{
  const notes = loadNotes()
  notes.forEach(note => console.log(note.title, note.body));
}

const readNotes = (title) => {
  const notes = loadNotes()
  const readNote  = notes.some((note)=> note.title === title)
  if(readNote){
    console.log(title)
  }
  else{
    console.log("No such note exists")
  }
}

const loadNotes = () =>{
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }
  catch(err){
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}

module.exports = { addNote, removeNote, listNotes, readNotes, loadNotes, saveNotes }