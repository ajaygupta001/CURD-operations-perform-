import { DBConnection } from "./data/database.js";
import { app } from "./app.js";

DBConnection();



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 4000");
})