//Inporting configuration
import {config} from "dotenv"
config()

//Mongo conection
export const MONGODB_URI = process.env.MONGODB_URI  || "mongodb://127.0.0.1:27017/test";

//Setting the port
export const PORT = process.env.PORT || 9999;
