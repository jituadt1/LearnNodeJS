const EventEmitter = require('events');

const emitter = new EventEmitter();


//Note: Add listener before emitting the event because when event is emitted it itrates all the register synchronously
//Register listener for this event
//emitter.on('messageEvent', function(arg){

            or 

 emitter.on('messageEvent', (arg) => {    //arrow functionality in ES6 (=>)


    console.log('Listener Called!', arg);
})

//Emit means to produce ==> singalling that there is a message
emitter.emit('messageEvent', {message:'logging'});