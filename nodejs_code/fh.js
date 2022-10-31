// // // // // let fs = require("fs")

// // // // // let readsync = fs.readFileSync("mytext.txt")
// // // // // console.log(readsync.toString())

// // // // // let redobjway = fs.readFileSync("mytext.txt", { encoding: "utf-8"})
// // // // // console.log(redobjway)

// // // // // let readfilenextway = fs.readFileSync("mytext.txt", "utf-8")
// // // // // console.log(readfilenextway)

// // // // // let redfilenxtway = fs.readFileSync("mytext.txt", "utf8")
// // // // // console.log(redfilenxtway)

// // // // const fs = require("fs")
// // // // let readfile = '🤡🤡🤡'
// // // // fs.readFile("mytext.txt", "utf8", (err,data) => {
// // // //         if(err){
// // // //             console.log(err)
// // // //         }else {
// // // //             let text = readfile += data;
// // // //             console.log(text)
// // // //         }
// // // // })
// // // // console.log(readfile)

// // // let fd = require('fs')
// // // fd.readFile("data.json", {encoding: "utf8"}, (err,data) => {
// // //     if(err) throw err;
// // //     console.log(data)
// // // })

// // let file = require("fs")

// // let users = [
// //     {
// //         id:01,
// //         name: "shashi"
// //     },
// //     {
// //         id:02,
// //         name:"dixith"
// //     }
// // ]

// // file.writeFileSync("user.json", JSON.stringify(users))
// // file.writeFileSync("user1.json", file.readFileSync("data.json","utf8"))
// // file.writeFileSync("user3.json", file.readFileSync("mytext.txt","utf8"))

// const file = require("fs")

// file.readFile("data.json", {encoding:"utf8"}, (err,data)=> {
//     if(err) throw err
//     console.log("successfully read data")

//     file.writeFile("newuser", data, err => {
//         if(err) throw err
//         console.log("successfully data has been written")
//     })
// })

const file = require("fs")

// delete the file sync
// file.unlinkSync("mytext.txt")

// file.unlink("newuser", (err,data) => {
//     if(err) throw err
//     console.log("data deleted successfully")
// })

// file.mkdirSync("jspiders", {recursive:true})

// file.mkdir("testyantra", {recursive:true}, (err) => {
//     if(err) throw err
//     console.log("folder created successfully")
// })

// file.rmdirSync("jspiders")
// file.rmdir("testyantra", err => {
//     if(err) throw err
//     console.log("folder removed successfully")
// })