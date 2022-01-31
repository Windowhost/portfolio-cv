// Importacion de los modules
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import indexRouter from "./routes/index.routes"

//Inicializacion
const app = express();


//Settings
 app.set("views", path.join(__dirname, "views"));
 app.engine("handlebars", engine({
   layoutDir: path.join( app.get("views"), "layouts"),
   partialsDir: path.join(app.get("views"), "partials"),
   defaultLayout: "main",
   etxname:"handlebars",
 }))
 app.set("view engine", ".handlebars");


 //Midleware
 app.use(morgan("dev"))
 app.use(express.json());
 

 //Hacien uso de las Routesd
 app.use(indexRouter)

 //Static Files
 app.use(express.static(path.join(__dirname, "public")))

export default app;