//Dealing with emitter in node js
// when dealing with emitters in node js you must know that its and event.
// this means that it occurs based on occurrence/ or a trigger of an action 
// Because an event module is a class and we want to use a method within it we have to create an object

const Event = require('events');
const myEmit = new Event ();

//after creating a new event of module you have to listen for the occurrence of an event with the new obj
//To listen you must first have two properties to be able to listen for an event.
// First is a name of the event to listen from and second is the event to happen after detected
myEmit.on('dutyFunction',()=>{
    let duty =3;
    for(let i=0; i<duty; i++){
        console.log(`This is duty ${i+1}`);
    }
});

//after the emitter is detected as on and the function is passed to perform
// you can now you the emit method to run the function named as 'dutyFunction'on call.
myEmit.emit('dutyFunction');
