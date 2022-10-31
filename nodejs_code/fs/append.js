const file = require("fs")


// ! appending the file
// file.appendFileSync("index.txt", "test yantra is very good for students")

// // !renaming the file
// file.rename("index.txt", "index.html", err => {
//     if(err) throw err;
//     console.log("successfully file renamed")
// })

// file.renameSync("index.html", "index.js")

// file.stat("index.js", (err,data) => {
//     if(err) throw err
//     console.log(data)
// })

file.chmod("index.js", 777, (err) => {
    if(err) throw err
    console.log("permission changed successfully")
})