// 'use strict'
// // let obj={
// //     name:"Vlasis"
// // };


// // let stringObj=JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(obj);
// // console.log(stringObj);

// var person=`{"name":"Vlasis","age":30}`;
// var person=JSON.parse(person);
// console.log(person.name);


const fs=require('fs');
var originalNote={
    title:"Some title",
    body: "asdaf"
};

let originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

let note=JSON.parse(noteString);
console.log(note.title);



