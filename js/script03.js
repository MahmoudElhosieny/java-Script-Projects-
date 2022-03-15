// regular function===

//#region  user function
function test() { // writting method #1
    return 2;
};
//#endregion
console.log(test());
let test1 = function () { // writting method #2
    return 2;
}
console.log(test1());

// === arrow function ====

let test2 = () => { // writting method #1
    return 3;
};
console.log(test2());

let test3 = (a) => a * 3; // writting method #2 if i have (1) statment with (1) parameter

console.log(test3(50));

let test31 = a => a * 4; // writting method #2 if i have (1) statment with (1) parameter we can remove ()

console.log(test31(50));

let test4 = _ => 4; // writting method #3 if i have (1) statment if we have no parameters we replace () with _

console.log(test4());

// ======================= templet litral (templet string )

//===== old way====

const type = 'Male';

let oldWay = 'My Name is ' + (type === 'Male' ? 'Mr. ' : 'Mrs. ') + 'Mahmoud \n' + // to add if() statment
    'i am ' + type + '\n' + // to add a variable  
    'hellow world \n' +
    'from Egypt ( old way)';

console.log(oldWay);

//===== new way====

let newWay = `My Name is ${ type === 'Male' ? 'Mr. ' : 'Mrs. '}Mahmoud 
 i am ${ type }  
 hellow world 
from Egypt ( new way) `;

console.log(newWay);

// write html code by using templet litrial 

let userName = 'Mahmoud',
    age = 26;

let htmlMarkup = `
<div class='card'> 
<h1 id='name' > ${userName} </h1>
<span class = 'age' > ${age}</span>
</div>
`;

console.log(htmlMarkup);
document.body.innerHTML = htmlMarkup;

// === spread operator (...array or object)

let array1 = [1, 2, 3],
    array2 = [3, 4, 5];

//== the old way to concat the 2 arry

let allArray = array1.concat(array2);
console.log(allArray);

//=== the new way by using (...) spread operator 
let allArray2 = [...array1, ...array2];
console.log(allArray2);

// ===== note that

let sum = (a, b, c) => a * b * c;

console.log(array1);
console.log(sum(array1));
console.log(...array1);
console.log(sum(...array1));

//=============

let arr1 = [1, 2, 3, 2],
    arr2 = arr1;

arr2.push(4); // === note that without the (...) spread perator .push(4) add (4) for the two arrys
console.log(arr1);
console.log(arr2);
//=============
let arr3 = [1, 2, 3, 2],
    arr4 = [...arr3];

arr4.push(4); // === note that by using the (...) spread perator .push(4) add (4) for the arry (4) only
console.log(arr3);
console.log(arr4);

// =====defuelt parameter ===

let sysTem = (username = 'defuel value', role = 'defuel value', them = 'defuel value') => `the client name is ${username}
it is role is ${role} and the app theam is ${them} `;

console.log(sysTem());
console.log(sysTem(`mohmed`));
console.log(sysTem(`mohmed `, `the director`));
console.log(sysTem(`mohmed `, `the director`, `red`));

// ========= Rest parameter ====

let sum1 = (...myparAry) => {

    let myNum = 1;
    for (let myparm of myparAry) {

        myNum *= myparm;
    }

    return myNum;
}

console.log(sum1(2));
console.log(sum1(21, 2));
console.log(sum1(2, 2, 5, 8, 3));
console.log(sum1(2, 25, 85, 47, 63, 500));

// ====== string method ==    string.startsWith('str' , index#) & string.endsWith('str', str.length) ==> true & false 

let myStr = 'hellow world from egypt';

console.log('hellow world from egypt'.length);
console.log(myStr.startsWith('he', 5)); // return false 
console.log(myStr.startsWith('he', 0)); // return true 
console.log(myStr.endsWith('he', 23)); // return false 
console.log(myStr.endsWith('t', 23)); // return true 

// ====== string method ==    string.includes('str' , index#) & string.repeat('str', index#) ==> true & false 

let myStr1 = 'hellow world from egypt';

console.log('hellow world from egypt'.includes('egypt', 12)); // return true 
console.log(myStr1.repeat(5));

// Destructuring object & array & parameter

const user = {
    name1: 'mohmed',
    gender: 'male',
    age1: 36,
    // city : 'cairo',
    website: 'msem@mkk',
    theme: 'red',
};

const {
    name1,
    gender,
    age1,
    city = 'defult'
} = user;

console.log(`my name is ${name1}, my age is ${age1} and i am ${gender}, my city is ${city} `);

// =============  to change the object properties name ============
// ============ the object Destructuring =======
const user1 = {
    name11: 'mohmed',
    gender1: 'male',
    age11: 36,
    // city : 'cairo',
    website1: 'msem@mkk',
    theme1: 'red',
    langs: {
        html: '70 %',
        css: '80 %',
        js: '45 %',
    },

    langs1: {
        html_: '70 %',
        css_: '80 %',
        js_: '45 %',
    }
};
// to change the property name ===> oldname: newname, //// to get the properties of an object in the main object
const {
    name11: thename,
    age11: theage,
    langs: {
        html,
        css: theCSS,
        js,
        python = '10 %'
    }
} = user1;

const {
    html_,
    css_,
    js_
} = user1.langs1; // to get the properties of the internal object

console.log(`my name is ${thename}, my age is ${theage} and my html progress is ${html} and paython is ${python} `);

console.log(` html = ${html_}, CSS = ${css_} and js = ${js_}`);

//================ the array destructuring ===================

const food = ['pizza', 'seafood', 'fish', , ['apple', 'banana', ['Egorange', 'KSAorange']], ' rice', 'meat', 'kwee'];

console.log(`my favorite foods are ${food[0]},${food[1]} and ${food[2]} `); // old way 

const [one, /* food[1] escaped*/ , three, four = 'defuelt', [fr1, fr2, [o1, o2]], ...othfoods] = food; // to escape which i donot need [1, ,3,4, ,6]
// rest operator ...arrayname
console.log(`my favorite foods are ${one} and ${three}, ${four}.
 My favorit fruits are ${fr1},${fr2} and i love all kinds of orange ${o1} & ${o2} `); // new way 

console.log(` the rest food are ${othfoods}`); // by rest operator 

// ============ swapping array by using destructring array ====

var book = 'Vedieo',
    video = 'Book';

[book, video] = [video, book] // swapping the properties 

console.log(`the book is ${book} and the video is ${video}`);

//================ mix objects & arrays 


const user3 = {
    name3: 'Ahmed',
    city3: 'cairo',
    skills: {
        html1: "80%",
        css1: '89%',
        //js: ['vuejs', 'reactjs', 'anguler']  // it is array 
        js1: {
            frame1: 'reactjs', //  convert array to object 
            frame2: 'vuejs',
            frame3: 'anguler'

        }
    }
}

const {
    name3,
    city3,
    skills: {
        html1,
        css1,
        js1: {
            frame1: one_,
            frame2: two_,
            frame3: three_
        }
    }
} = user3;
console.log(` my name is ${name3} and i live in ${city3}`);
console.log(` my html skills is ${html1} and css is ${css1}`);
console.log(` i have some knowldge in js framework as ${one_}, ${two_}, ${three_}`);

/// ========== function parameter destrucure ==============

//function showInf({name3, city3, skills: {html1, css1, js1 : {frame1:one_, frame2:two_, frame3:three_} }  })
function showInf(user3) // you can write it like this 
{

    console.log(` my name is ${name3} and i live in ${city3}`);
    console.log(` my html skills is ${html1} and css is ${css1}`);
    console.log(` i have some knowldge in js framework as ${one_}, ${two_}, ${three_}`);
};

showInf(user3);

//======================= Computed object property name ===

let myvariable = 'myNewvar'; // dynamic property writting 

let myOb = {
    myProper: 'prop1',
    [myvariable]: 'value' // dynamic property writting 
};

console.log(myOb)

// ============ set() & array ==
// to remove the repeated values from the arry 

let myArry1 = [1, 2, 3, 3, 3, 5, 8, 4, 4, 6, 6, 5, 7, 4, 4, 7]; // you need to remove the repeated value 

let myset1 = new Set(myArry1); // here we convert the array to an object with no repeated values 

console.log(myset1);
console.log(myArry1);
console.log([...myset1]); // here you convert the object to an arry with no repeated values 

// ============ set: methods()

let myFu = new Set('Mahmoud'); // note: here the set function itriate the string in single char..
//== set().methods
myFu.add('elhosieny')
myFu.add('youssef'); // note that here you add the complete string " Elhosieny"
myFu.delete('a')
myFu.has('elhoeny')
myFu.clear();

console.log(myFu)
console.log(myFu.has('Elhosieny'.toLowerCase()))

//=============== new map() & object 

let user4 = {};
user4.name5 = 'mahmoud',
    user4['website'] = 'elhoseny@dd.lk',
    user4[10] = 'number',
    user4[true] = 'boleen',
    user4["10"] = 'string',
    user4[function hhh() {}] = 'function',
    user4[{
        a: 1,
        b: 2
    }] = 'object';

console.log(user4);

let usermap = new Map([
    ['10', "string"],
    [10, "number"],
    [false, "bolun"]
]);

// usermap.set('10',"string")
// usermap.set(10,"number")
// usermap.set(false,"bolun")
// usermap.set({a:1 , b:2},"object")
// usermap.set(function hhh(){},"function")
console.log(usermap);

// ============ the map methods =========

console.log(usermap);
console.log(`my map element count is ${usermap.size}`);
console.log(`using  get method ${usermap.get(10)}`); // this method return the value of the key 
console.log(`using  get method ${usermap.get("10")}`);
console.log(`using  has method ${usermap.has(false)}`);
console.log(`using  delet method ${usermap.delete(false)}`);
console.log(`my map element count is ${usermap.size}`);
usermap.clear();
console.log(`my map element count is ${usermap.size}`);

// ========== Symbol() used to hide the data which i donot need it  ============

const mySymbol = Symbol("mohmed");

const myobj = {
    userName1: "Osama elzero",
    website2: "Elzerowebs@kkk",
    [mySymbol]: 'This is hiden from iteration'
}

console.log(myobj);

for (let val of Object.entries(myobj)) {
    console.log(val);
}

console.log(Object.getOwnPropertyNames(myobj));
console.log(Object.keys(myobj));
console.log(Object.getOwnPropertySymbols(myobj));
console.log(JSON.stringify(myobj));

//=================== forEach()===========

console.log(`${'#'.repeat(35)}`);

const arr = ['A', 'B', 'C', 'D', , 'F'];

for (let i = 0; i < arr.length; i++) { // note that in for function (it read the empety element and reeturn undefind value)
    console.log(`${i} -> ${arr[i]}`)
}
console.log(`${"#".repeat(35)}`);

arr.forEach(el => { // note that in forEach function (it doesnot read the empety element and not return its value)
    console.log(el);
});

arr.forEach((el, i) => {
    console.log(` ${i} ==> ${el}`);
});
// ========================== forEach( function name)

console.log(`${"#".repeat(35)}`);

let makeLoop = (element, index) => console.log(` ${index} --> ${element}`);

arr.forEach(makeLoop); // here you call a function 

console.log(`${"#".repeat(35)}`);

// ========================== forEach( currentkey, currentvalue, set)

const mySet = new Set([1, 1, 2, 3, 3, 25, 25, 25, 1, 4, 7, 4, 7]);

mySet.forEach((x, x1) => {
    console.log(`${x} => (${x1}) `)
})

console.log(`${"#".repeat(35)}`);

// ============ forEach() & map
const myMap = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['x', {}]
]);

myMap.forEach((z, k) => {
    console.log(` ${k} ===> (${z})`);
});

console.log(` ${'#'.repeat(30)}`);
// ======== new array methods ==========

let oldArry = Array(100);
let oldArry1 = Array("100");

console.log(oldArry)
console.log(oldArry.length) // array length = 100
console.log(oldArry1)
console.log(oldArry1.length) // array length = 1

//==================================================
let newArray = Array.of(100)

console.log(newArray)
console.log(newArray.length) // array length = 1

// ================== Array.from()

let myNum = "mohmed";
let numArr = Array.from(myNum);

console.log(myNum);
console.log(numArr);
// ===================================
let nuArr = [20, 30, 5, 24, 82, 36, 74, 25, 25, 47];

let newNuma = Array.from(nuArr, X => X - 15);

console.log(nuArr);
console.log(newNuma);

// ================== Array.fill()

let newArr1 = nuArr.fill(100, 3, 7); // .fill(value, start, end)

console.log(newArr1);

// ================== Array.find()
let newArr2 = nuArr.find(Y => Y > 80); // this function return value only 
console.log(newArr2);

// ================== Array.findIndex()
let newArr3 = nuArr.findIndex(Y => Y > 80); // this function return index of value only 
console.log(newArr3);

// ================== Array.copyWithin(Target, start, End)
let newArr4 = nuArr.copyWithin(0, 3, 4); // this function replace the required value in the target place  
console.log(newArr4);

// ================== Import & Export  

export let N = [1, 2, 3, 5, 8, 4, 6, 7]; // this is named as (named export)
export let Me = "mamoud";

export function sayHall(name3) {

    return `Hello, ${name3}`;
}

// == another method to write the export 
let N1 = [1, 2, 3, 5, 8, 4, 6, 7];
let Me1 = "Ahmeed";

function sayHall1(name4) {

    return `welcome, ${name4}`;
}

export {
    N1 as Arry2, // you can export data with different names 
    Me1 as frind,
    sayHall1
}

// ============= defualt export 

const c = 5000;

export default c; // note that the defaulted value is single one only you can not make two default values 

// ============== oop ==> new syntax for class =============

// ============== old method to write constractor one

function Auser(LN, LA) {

    this.name = LN;
    this.age = LA;

}
// to write an method 
Auser.prototype.getifo = function () {

    console.log(`wellcome, ${this.name}, your age is ${this.age}`);

}

Auser.prototype.getAg = function () {

    console.log(` your age in days is ${this.age * 365} Days `);

}

// to creat the first user from the constructor one

const firstUser = new Auser('Ahmed', 25);

firstUser.getifo();
firstUser.getAg();

// === OOP ===> the new syntax  of class ====
export class Nuser {
    constructor(NN, AA, email) {
        this.nam = NN;
        this.ag = AA;
        this.email = email;
    }
    getNam() { // method 
        console.log(` you are welcome, Mr. ${this.nam}, and your age is ${this.ag}`);
    }
    getAg() { // method 
        console.log(` you are welcome, your age is ${this.ag * 12 } months`);
    }

    getEmial() {
        console.log(` you are welcome,Mr. ${this.nam},and your age is ${this.ag}, your email is ${this.email}`);
    }

}

const secUser = new Nuser('Mahmoud Elhosieny', 26);

secUser.getNam();
secUser.getAg();

console.log(` ${'#'.repeat(30)}`);