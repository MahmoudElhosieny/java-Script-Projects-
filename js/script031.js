
// import {N, Me,sayHall } from './script03.js';

// console.log(N);
// console.log(Me);
// console.log(sayHall('Monaaaaa'));

// import {Arry2, frind, sayHall1 } from './script03.js';

// console.log(Arry2);
// console.log(frind);
// console.log(sayHall1('Salma'));

// ======== to import evry exported values 

import * as allexportedValue from './script03.js'; // note that (allexportedValue) is any name you put 

console.log(`${'&'.repeat(30)}`);

console.log(allexportedValue); // this is the module which contains evry exported values 
console.log(allexportedValue.Arry2)
console.log(allexportedValue.N)
console.log(allexportedValue.sayHall('Mr. sayed Ahmed '))

// importing he default value 

import myC ,{N, Me}  from './script03.js'; // note that you can import the default value with any name and you do not put it in ()
            /* here you can add the named exported values {}*/
console.log(myC);
console.log(N);
console.log(Me);

// import class and creat a new child class 

import { Nuser} from './script03.js';

// creat new child class

class Admin extends Nuser {
 constructor(NN, AA, email){
     super(NN, AA, email)
 }

}

let newAdmin = new Admin('mohmed hamed', 26 ,'jjj@.com')

newAdmin.getEmial();

console.log(` ${'#'.repeat(30)}`);











