////check lodash


const os = require('os');
const _= require('lodash');
const fs=require('fs');
const yargs=require('yargs');

const notes=require('./notes.js');
var writefile=function(data){fs.appendFile('log.txt',`${data} \n`,(err)=>{if (err) return err})};


const title={
	type:"command property",
	details:{
		describe:"Title of note",
		demand:true,
		alias:"t"
	}
}

const body={
	type:"command property",
	details:{
		describe:"Body of note",
		demand:true,
		alias:"t"
	}
}




let argv=yargs
.command('add','Add A new Note',{title:title.details,body:body.details})
.command(`list`,`List All Notes`)
.command(`read`,`Read a note`,{title:title.details,body:body.details})
.command(`remove`,'Remove A note',{	body:body.details,title:title.details})
.help()
.argv;

var command=(argv._[0]);



if(!!command){
	

	switch (command){
		case 'add':{
			console.log("Adding notes  \n");
			let note=notes.addNote(argv.title,argv.body);
		    if(!!note){
				console.log(`Note  added succesfully`)
				console.log(`-----------------`)
				console.log(`Title: ${note.title}`);
				console.log(`Body:  ${note.body}`);
			}
			else{
			console.log("note already exists");	
						}
			break;}
		case 'list':{
			let Allnotes=notes.getAll();

			console.log(`listing ${Allnotes.length} nodes`)
			Allnotes.forEach((note)=>console.log(note));
	
			break;}
		case 'getnote':{
			;
			break;}	
		case 'read':{
			console.log(`Getting ${argv.title} note`);
			let res=notes.read(argv.title);
			res.length>0?console.log(res):console.log("Note not found");
			break;
		}	
			case 'remove':{
			let removednotes=notes.remove(argv.title);
			let message=removednotes?console.log(`There wasn't a note with title "${argv.title}" `):console.log(`The note with title "${argv.title}" was removed`)
			break;
		}  
		default:{
			console.log('cmd not recognized  \n');
			break
		}

	}
}

else{
	console.log('no command was given');
}

