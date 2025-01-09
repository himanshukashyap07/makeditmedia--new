import mongoose from "mongoose";

type ConnectionObject={
    isConnected? : number // ? is used for optional field 
}

const connection:ConnectionObject = {}
// void == any its is not same as C or C++
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("database is alredy connected");
        return 
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI! || "",{})

        connection.isConnected = db.connections[0].readyState
        // console.log(db,db.connections)
        console.log("db connected successfully");
        
    } catch (error) {
        console.log("db connection failed",error);

        process.exit(1)
    }
}

export default dbConnect

