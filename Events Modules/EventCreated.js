const EventEmitter = require('events');

class EventCreated extends EventEmitter {

   emitter = new EventEmitter();
    log(message)
    {
        console.log(message);


        this.emit('messagelogged', {data: 'Event Created'} );

    }
    
    
}

module.exports = EventCreated;