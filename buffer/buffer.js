
// It requires the fs module 
const fs = require('fs');

const dns = require('node:dns');

const buffer = Buffer.from("Hellow word");
console.log(String.fromCodePoint(buffer[3]))

const buffer1 = Buffer.alloc(10)
buffer.copy(buffer1, 2);
console.log(buffer1.toString());

const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const myobject = new console.Console(out, err);

// It will display 'This is the first example' to out
myobject.log('This is the first example');

// It will display 'This is the second example' to out
myobject.log('This is the %s example', 'second');

// It will display 'Error: In this we creating some error' to err
myobject.error(new Error('In this we creating some error'));

const num = 'third';

// It will display 'This is the third error' to err
myobject.warn(`This is the ${num} example`);

console.warn("It is a waring");

console.assert(Date.now(), Date.now(0), "Both values are not the same");
// console.error(new Error("it is %s", 'error'));

console.dir([23, 343, 43]);

console.table({hello: 1,
    world: 2
})

const google = dns.lookup("www.google.com",(err, data) => {
    if(err) {
        console.error(err)
    }else {
        console.log(data);
    }
});

dns.reverse("2404:6800:4007:821::2004", (err, data) => {
    console.log(data);
})

console.log(google);