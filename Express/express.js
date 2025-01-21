const express = require('express');
const { createReadStream } = require('fs');

const app = express();
app.use((req, res, next) => {
    console.log(req.method)
    if (req.method == "POST") {
        
        res.writeHead(403, { 'Content-type': "application/text" });
        res.end("access prohibited");
    }
    next()

})


app.get('/home', (req, res) => {

    res.send("<h1>It is the response from Home</h1>");
})
app.get('/get-data', (req, res) => {
    createReadStream('../date1.txt', { encoding: "utf-8", highWaterMark: 1 }).pipe(res)

});


const port = 3001;

app.listen(port, () => console.log("http://localhost:" + port));