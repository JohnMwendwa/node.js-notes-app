const fs = require('fs');
const chalk = require('chalk');

//COLOR VARIABLES
const success = chalk.bgGreen;
const error = chalk.bgRed;

//Load notes 
const loadNotes =()=>{
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data
  }catch(e){
      return []
  }
}

//Save new note
const saveNote =(note)=>{
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json',dataJSON)
}

// Add a new note
const addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note=> note.title === title);
    if(duplicateNote){
       console.log(error('Note already exists!!!'));
    }else{
        notes.push({
            title,
            body
        })
        saveNote(notes)
        console.log(success('New note saved!!!'))
    }
}

//Read the contents of a note
const readNote =(title)=>{
    const notes = loadNotes();
    const foundNote = notes.find(note=> note.title === title);
    if(foundNote){
        console.log(chalk.underline(foundNote.title));
        console.log(foundNote.body);
    }else{
        console.log(error('No such note exists!'))
    }
}

// List all notes
const listNotes =()=>{
    const notes = loadNotes();
    console.log(chalk.underline('Your Notes'));
    notes.forEach(note=>console.log(note.title))
}

// Remove a note 
const removeNote =(title)=>{
    const notes = loadNotes();
    const remainingNotes = notes.filter(note=>note.title !== title);   
    if(notes > remainingNotes){
        saveNote(remainingNotes);
        console.log(success('Note removed successfully!'))
    }else{
        console.log(error('No such title exits'))
    }
}

// Export the functions to be consumed in other files
module.exports = {
    addNote,
    readNote,
    listNotes,
    removeNote,   
}
