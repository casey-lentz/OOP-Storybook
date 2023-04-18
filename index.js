//const Alien = require('./Aliens.js');
import Alien from './classes/Aliens.js';
const alienOne = new Alien('John Alien', `Hello, John from Mars here.`);
console.log(
    `${alienOne.name}
    and the phase is ${alienOne.sayPhrase()}.
    I'm flying ${alienOne.fly()}`);

