const fs = require('fs');

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
       console.log('Note already exists!!!');
    }else{
        notes.push({
            title,
            body
        })
        saveNote(notes)
        console.log('New note saved!!!')
    }
}

const listNotes =()=>{
    const notes = loadNotes();
    console.log('Your Notes')
    notes.forEach(note=>console.log(note.title))
}

const removeNote =(title)=>{
    const notes = loadNotes();
    const remainingNotes = notes.filter(note=>note.title !== title);   
    if(notes > remainingNotes){
        saveNote(notes);
        console.log('Note removed successfully!')
    }else{
        console.log('No such title exits')
    }
}

