console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);

fs.appendFileSync('greetigns.txt', 'Hello ' + user.username + '!');
