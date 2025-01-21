const http = require("node:http");
const { parse } = require("node:url");


const server = http.createServer((req, res) => {
    const url = parse(req.url);
    if (url.pathname == "/home") {

        res.end("<h1>Hello about</h1>");
    } else if (url.pathname == "/about") {

        res.end("<h1>Hello about</h1>");
    } else {
        res.end(`<h1>hello ${url.path} </h1>`.replace(/\//g, " "))
    }

}).listen(8080, () => console.log("server listens at http://localhost:8080"));