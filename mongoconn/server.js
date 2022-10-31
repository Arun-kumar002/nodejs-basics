// mongodb url
let url = 'mongodb://localhost:27017';

import {MongoClient} from 'mongodb';

let {connect} = MongoClient;

let connectDb = async () => {
    try{
        let db = await connect(url);
        console.log("db connected");

        // creation of database
        let dbName = db.db("testyantra")
        
        // create connection
        let users = {
            name:"dixith",
            company:"Testyantra",
            designation:"java developer",
            salary:10000,
        }

        await (await dbName.collection("users")).insertOne(users);
        console.log("successfully db created and inserted data");
    }catch (error) {
        console.error(error);
    }
}

connectDb()