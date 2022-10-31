const http = require("http")
const fs  = require("fs");
const { parse } = require("querystring");
const nodemailer = require("./mail")
// console.log(nodemailer)

let server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        if(req.headers['content-type'] === "application/x-www-form-urlencoded"){
            let body = '';
            req.on("data", chunk => {
                body += chunk
            })
            req.on("end", _ => {
                let contactDetails = parse(body);
                let options = {
                    from:contactDetails.email,
                    to: "harishrao.star396@yahoo.com",
                    subject: "contact details",
                    html: `<h1> details received</h1>
                                <p>Email: ${contactDetails.email}</p>
                                <p>FirstName: ${contactDetails.firstname}</p>
                                <p>LastName: ${contactDetails.lastname}</p>
                                <p>Phone Number: ${contactDetails.number}</p>
                                <p>Address: ${contactDetails.address}</p>
                                `
                }

                nodemailer.sendMail(options, err => {
                    if(err) throw err
                    console.log("successfully email sent")
                })
                console.log(contactDetails)
                res.end("Thank you for contacting us")
            })
        }else {
            res.end("THank you")
        }
    } else {
        if(req.url === "" || req.url === '/'){
            fs.createReadStream("clients/index.html", "utf8").pipe(res)
        } else if(req.url === "/form.css"){
            res.writeHead(200, "ok", {"content-type" : "text/css"});
            fs.createReadStream("clients/form.css", "utf-8").pipe(res)
        }else {
            fs.createReadStream("practice/pagenotFound.html", "utf8").pipe(res)
        }
    }
})

let port = process.env.PORT || 5000;

server.listen(port, (err) => {
    if(err) throw err
    console.log(`server running on port number ${port}`)
})