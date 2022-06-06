const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const {addNote,readNote,listNotes,removeNote} = require('./notes-functions')
const argv = yargs(hideBin(process.argv))
    .command('add','Add a note',{
        title:{
            describe:"Note title",
            demand:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demand:true,
            type:'string'
        }
    },(argv)=>addNote(argv.title,argv.body))
    .command('read','Read a note',{
        title:{
            describe:'Note title',
            demand:true,
            type:'string'
        }
    },(argv)=>readNote(argv.title))
    .command('list','List all notes',()=>listNotes())
    .command('remove',"Remove a note",{
        title:{
            describe:"note title",
            demand:true,
            type:'string'
        }
    },(argv)=>removeNote(argv.title))
    .help()
    .argv