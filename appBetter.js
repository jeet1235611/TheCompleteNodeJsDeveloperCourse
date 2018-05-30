console.log('Starting app.js');
const fs = require('fs');

fs.appendFileSync('greetings.txt', 'Hellow world!');

// For the higher version of node.
//For node v7 or greater we will get a small error.
//Original line
fs.appendFile('greetings.txt', 'Hello World!');

//option1 
fs.appendFile('greetings.txt', 'Hello world!', function(err){
  if(err) {
    console.log('Unable to write to file');
  }
});

//Otion two
fs.appendFileSync('greetings.txt', 'Hello World!');

//
// const fs = require('fs');
// const os = require('os');
// const notes = require('./notes.js');
//
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello ${user.username}! You are {notes.age}.');
