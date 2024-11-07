const { writeFile, open, read, readFile, appendFile, unlink, appendFileSync, mkdir, rename, createWriteStream, createReadStream, stat } = require("node:fs");
const { Buffer } = require('node:buffer');
const path = require("node:path");

const buff = Buffer.alloc(1024);

function promiseMaker() {
    return new Promise((resolve, reject) => {
        resolve(new Date())
    })
}
promiseMaker().then(data => {
    writeFile("date.js", Buffer.from(data), "utf-8", (err) => {
        if (err) {
            console.dir(err);
        }
    })
})

open('date.txt', 'r+', (err, data) => {
    if (err) {
        return console.error(err)
    }
    console.log(data)
    read(data, buff, 0, buff.length, 0, (err, byte) => {
        if (err) {
            return console.error(err);

        }
        console.log(byte, 'Read bytes');
        if (byte > 0) {
            console.log(buff.subarray(0, byte).toString());

        }

    })
})

writeFile('main.txt', "it is basically a data which everyone would ask for ", (err) => {
    if (err) {
        console.error(err);
    }
})
for (let i = 0; i < 10; i++) {
    appendFileSync('main.txt', "It is a looping data which i need to append to file " + i + " times \n", (err) => {
        console.error(err)
    })
}
// unlink('main.txt', (err) => {
//     console.log(err)
// })
readFile('main.txt', "utf-8", (err, data) => {
    console.dir(data)
})

mkdir(path.join(__dirname, 'demo'), (error) => {
    if (error) {
        return console.log(error);
    }
})
rename('main.txt', './demo/main.txt', (err) => {
    console.error(err);
})

readSteam = createReadStream('./demo/main.txt', { highWaterMark: 20, encoding: "utf-8" });
readSteam.on('data', (chunk) => {
    console.log(chunk)
})

readSteam.pipe(createWriteStream('output.txt', { flags: 'w' }));
stat('./date.js', (err, info) => {
    if (err) {
        return console.error(err);

    }
    console.dir(info.isFile())
})

console.log(process.env.PORT);

