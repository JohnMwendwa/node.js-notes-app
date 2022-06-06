const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const {addNote,listNotes,removeNote} = require('./notes-functions')
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
    .command('list','List all notes',()=>listNotes())
    .help()
    .argv