const http = require("http")
const fs = require("fs")
const { parse } = require("querystring")

http.createServer((req,res) => {
    if(req.method === 'POST'){
        if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
            let body = '';
            req.on("data", chunk => {
                body +=chunk.toString()
            });
            req.on("end", _ => {
                let userdata = parse(body);
                console.log(userdata.firstname)
                console.log(userdata.lastname)
                console.log(userdata.number)
                console.log(userdata.email)
                console.log(userdata.password)
                res.end("ok")
            })
        } else {
            res.end("other header")
        }
    }else{
        fs.createReadStream("tform.html", "utf-8").pipe(res)
    }
}).listen(5000, err => {
    if(err) console.log(err)
    console.log("backend running in port 5000")
})