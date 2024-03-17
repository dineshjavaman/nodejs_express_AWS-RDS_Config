import { MongoMemoryServer } from "mongodb-memory-server";
import  mongoose from "mongoose" ;


export default async function connect(){
   const mongoserver= await MongoMemoryServer.create();
   const mongouri =mongoserver.getUri();

   await mongoose.connect(mongouri,{dbname:"testingDB"})
   console.log(`mongodb successfully connected to  ${mongouri}`);


}