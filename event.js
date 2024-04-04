const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{
    console.log("Remider !");
},3000);
});
console.log("script is running!");
myEmitter.emit('waterfull');
// console.log("script is running!");