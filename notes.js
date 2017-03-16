const fs=require('fs');


let fetchNotes=()=>{
 try{
        let noteString=fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        return [];

    }
}

let SaveNotes=(notes)=>{
 fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

let addNote=(title,body)=>{
    var notes=fetchNotes();
    let note={
        title,
        body
    }
    var duplicateNotes=notes.filter((note)=>note.title==title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        SaveNotes(notes);
        return note;
        }
}



let getAll=()=>{
    
    return fetchNotes();    
}

let read=(title)=>{
  let notes=fetchNotes();
  let matchingnotes=notes.filter((note)=>note.title===title);
  let res={}
  matchingnotes.length>0 ? res=matchingnotes:res={};
  return  res;
}
let remove=(title)=>{

let notes=fetchNotes();
let keepnotes=notes.filter((note)=>note.title!==title);
SaveNotes(keepnotes);
return notes.length===keepnotes.length//


   
}


module.exports={addNote,getAll,read,remove};