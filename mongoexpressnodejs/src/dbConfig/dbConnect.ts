import mongoose from "mongoose";
export const connectToDB = async ()=>{
    try {
      const conn =  await mongoose.connect('mongodb+srv://deepumurthy10:ldGlEnLt5grGSQcY@mernstack.aulxrmv.mongodb.net/productsdb?retryWrites=true&w=majority&appName=mernstack')
    console.log(`Connected to mongodb ${conn.connection.host}`)
    return conn
    } catch (error: unknown) {
        if(error instanceof Error)
        console.log(`Error Connecting to mongodb ${error.message}`) 
    else
    console.log(`Error Connecting to mongodb `) 
    }
    
}
export default connectToDB

// let value: unknown = 'something'
// if(typeof value === 'string'){

// }
// //value.something()