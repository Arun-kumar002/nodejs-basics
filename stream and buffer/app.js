// // let buffer = new Buffer("shashi")
// // console.log(buffer)

// let fs = require("fs");
// // const { off } = require("process");

// // fs.readFile("read.txt", 'utf8',(err,data) => {
// //     if(err) throw err
// //     console.log(data)
// // })

// // !creation of readstream
// let readStream = fs.createReadStream("read.txt", {
//     encoding: "utf-8",
//     start: 0,
//     end: 100,
// })
// // console.log(readStream)

// // !read a data in small chunks
// // to read a stream add an event
// // on is an firing event
// // readStream.on("data", (data) => {
// //     // if (error) throw error   
// //     console.log(data)
// // })

// let writeStream = fs.createWriteStream("text.txt", { encoding: "utf-8" })

// readStream.on("data", chunk => {
//     let arr = chunk.split(" ")
//     console.log(arr)
//     writeStream.write(chunk, err => {
//         if (err) throw err
//         console.log("data has been writen successfully")
//     })
// })
