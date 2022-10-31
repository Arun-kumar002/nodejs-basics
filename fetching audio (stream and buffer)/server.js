let http = require("http")
let fs = require("fs")


http.createServer((req, res) => {
let body = 1;
let sng = '';
    if (req.method === "POST") {
        if(req.headers["content-type"] === "application/json"){
        req.on('data', chunk => {
            body = chunk.toString()
            // body = JSON.stringify(chunk);
            console.log(body)
        })
        req.on('end', err => {
            if(err) throw err
            res.end("data not entered chunk zone")
        })
        }
        // else{
        //     res.end("no data fetched")
        // }
    }
    else if (req.url == "/audio/a1") {
        res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
        fs.readFile(`./client/audio/a${body}.mp3`,(err, data) => {
            if(err) throw err
            
            res.end(data)
        })
    }
    else if (req.url == '/' || req.url == " ") {
        res.writeHead(200, "ok", { "content-type": "text/html" })
        fs.createReadStream("./client/index.html", "utf-8").pipe(res)
        // res.end("Hello audio")
    }
    else if (req.url == "/audio.css") {
        res.writeHead(200, 'ok', { "content-type": "text/css" })
        fs.createReadStream("./client/audio.css", "utf-8").pipe(res)
    }
    else if (req.url == "/audio.js") {
        res.writeHead(200, 'ok', { "content-type": "text/js" })
        fs.createReadStream("./client/audio.js", "utf-8").pipe(res)
    } else {
        res.end("page not found")
    }
    // else if (req.url == "/audio/a1") {
    //     res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
    //     fs.createReadStream("./client/audio/a1.mp3").pipe(res)
    // }
    // else if (req.url == "/audio/a2") {
    //     res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
    //     fs.createReadStream("./client/audio/a2.mp3").pipe(res)
    // }
    // else if (req.url == "/audio/a3") {
    //     res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
    //     fs.createReadStream("./client/audio/a3.mp3").pipe(res)
    // }
    // else if (req.url == "/audio/a4") {
    //     res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
    //     fs.createReadStream("./client/audio/a4.mp3").pipe(res)
    // }
    // else if (req.url == "/audio/a5") {
    //     res.writeHead(200, 'ok', { "content-type": "audio/mp3" })
    //     fs.createReadStream("./client/audio/a5.mp3").pipe(res)
    // }
}).listen(4500, (err) => {
    if (err) console.log(err)
    console.log("server running at port number 4500")
})