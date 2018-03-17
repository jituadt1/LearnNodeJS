const fs = require('fs');

//Asynchronous file system
const files = fs.readdir('./', function(err, files){
 
    if(err) console.log('Error', err);
    else console.log('Results', files);

})
