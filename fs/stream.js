const {open, access, write, close, createReadStream, createWriteStream} = require("node:fs");

open("reject.txt", "a", (err, fd) => {
    if(err) {
        console.log(err);
    }
    console.log(fd)
    write(fd, "something at: " + new Date().toISOString(),() =>{});
    close(fd,() => {});

})

const readableStream = createReadStream("reject.txt", {encoding: "utf-8", highWaterMark: 10})
readableStream.on("data", (data) => {
    console.log(data.toUpperCase());
    writableStream.write(data.replaceAll(/[a,A]/g, ""), () =>{});
    writableStream.end();
})

const writableStream = createWriteStream("transformed.txt", {encoding: "utf-8"});

open("transformed.txt", "")