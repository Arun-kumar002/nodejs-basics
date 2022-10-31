// // // // const file = require("fs")

// const { mkdir } = require("fs");

// // // // file.mkdir("node_module", (err) => {
// // // //     if(err) throw err
// // // //     console.log("node_module created successfully")
// // // // })

// // // // file.mkdir("public", (err) => {
// // // //     if(err) throw err
// // // //     console.log("public folder creted successfully")
// // // // })

// // // // file.mkdir("src", err => {
// // // //     if(err) throw err
// // // //     console.log("sec folder created successfully")
// // // // })

// // // // file.writeFile("public/index.html", `<html><head></head><body></body></html>`, (err) =>{
// // // //     if(err) throw err
// // // //     console.log("index file created in public")
// // // // })

// // // // file.writeFile("src/index.js", `<html><head></head><body></body></html>`, (err) => {
// // // //     if(err) throw err
// // // //     console.log("index.js file created successfully")
// // // // })

// // // const file = require("fs/promises");

// // // // file.readFile("data.json", "utf-8").then(data => console.log(data)).catch(err => console.log(err))
// // // // .finally("final data")

// // // let readFile = async () => {
// // //     let data = await file.readFile("data.json","utf-8")
// // //     console.log(data)
// // // }

// // // readFile()

// // import file from "fs/promises";
// // let data = await file.readFile("data.json","utf-8")
// // console.log(data)

// import { writeFile } from "fs"
import file from "fs/promises"

// // file.mkdir("Model",{recursive:true}, (err) => {
// //     if(err) throw err
// //     console.log("Model folder created successfully")
// // })

// // file.mkdir("Route", {recursive:true}, (err) => {
// //     if(err) throw err
// //     console.log("Route folder is created")
// // })

// file.mkdir("Constructor", {recursive:true}, (err) => {
//     if(err) throw err
//     console.log("Constructor folder is created")
// })

// // await file.rmdir("Model")
// // await file.mkdir("public")
// // await file.rmdir("public")
// // await file.rmdir("route")
// await file.rmdir("constructor")
// await file.rmdir("node_module")
// await file.rmdir("src")

// await file.mkdir("model")
// await file.mkdir("route")
// await file.mkdit("constructor")

// await file.writeFile("model/auth.js","<html></html>")
// await file.rmdir("constructor")
// await file.mkdir("Controller")

