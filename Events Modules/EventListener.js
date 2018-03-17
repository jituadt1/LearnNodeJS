const EventEmitter = require('events');


const Logger = require('./EventCreated');

const logger = new Logger();


logger.on('messagelogged' , (arg) => {

    console.log("Listener Called!", arg);
});

logger.log('Creat an event!')


