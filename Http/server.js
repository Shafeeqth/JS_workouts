const { readFile } = require("node:fs");
const http = require("node:http");
const urls = require('node:url')

http.createServer((req, res) => {
    let {path, } = urls.parse(req.url)

    if(path === "/" || path == "/home") {
        let page = readFile('.index.html',(err, data) => {
            if(err) {
                console.error(err);
            }else {
                res.send
            }
            
        } )
    }
    console.log(url);

    
    res.end('<h1> Hello world </h1>')
}).listen(5600, ()=> {
    console.log("listening at http://localhost:5600")
})