let fs = require('fs');
let fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('notes.json');
        notes = JSON.parse(noteString);
        return notes;
    } catch (e) {
      return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}


let addNote = (title,body) => {
    let notes = fetchNotes();
   let note = {
       title,
       body
   };
//    console.log(notes);
let duplicatenotes = notes.filter(note => note.title ===title);

if(duplicatenotes.length ===0){
    notes.push(note);
    console.log('Note added', title)
    saveNotes(notes);
    return note;
   
}
    

}
let getAll = () => {
  return fetchNotes();
 

}

let readNote = (title) => {
    console.log('Reading you note');
   fetchNotes();
//    for(let i=0;i<notes.length;i++){
//        if(title===notes[i].title){
//            console.log(`Note's title is ${notes[i].title} and body is ---- ${notes[i].body}`);
//        }
//    } 
   let readnote = notes.filter(note => note.title === title);
return readnote[0];

}

let removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    let removednote = notes.filter(note => note.title!==title)
// console.log(removednote);
console.log(`Removed note ${title}`);
    //filter notes and remove from the array with title argument
    //save the notes
    saveNotes(removednote);
    return notes.length !== removednote.length;

}

let logNote = (note) => {

    console.log('---')
    console.log(`${note.title}`)
    console.log(`${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
    
}
