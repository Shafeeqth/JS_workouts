const {writeFileSync, writeFile} = require("fs");
const {} = require("node:fs/promises");
const {promisify} = require("node:util");


function something(src, callback) {
    setTimeout(() => {
        if (src.includes("something")) {
            return callback("operation success");
        } else {
            return callback(null, new Error("Something went wrong"));

        }
    }, 1500)

}

// something("does not have something", (err, data) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data);
// });





function anything(src) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (src.includes("anything")) {
                return resolve(writeFileSync("./resolve.txt", new Date().toString(), "utf-8"));
            } else {
                return reject(writeFile("./reject1.txt", new Date().toString(), "utf-8", () => {}));

            }
        }, 1500)
    });

}
anything("something").then(data => console.log(data)).catch(err => console.error(err))


