import express from "express";
import { deleteUser, getAllUsers, getUserById, newUsers, specialFunc, updateUser } from "../controllers/user.js";


const router  = express.Router();



      router.get('/all', getAllUsers);
      router.post("/new", newUsers);
      router.get("/userid/special", specialFunc);
      router.get("/userid/:id", getUserById);
      router.put("/userid/:id", updateUser);
      router.delete("/userid/:id", deleteUser);
    


    export default router;
    
  