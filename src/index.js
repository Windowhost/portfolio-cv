import app from "./app";
import {PORT} from "./config"
import "./db/database"

// Starting the port
app.listen(PORT, () => {
    console.log("Backend Server is Running!...", PORT)
})