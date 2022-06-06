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