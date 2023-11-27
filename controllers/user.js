import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    const keyword = req.query.keyword;
    console.log(keyword);
  
    res.json({
      success: true,
      users,
    });
  };


  export const newUsers = async (req, res) => {
    try {
      const { name, email, password } = req.body;
    
      const newUser = await User.create({ name, email, password });
  
      // Return a success response
      res.status(201).cookie("temp","lol").json({
        success: true,
        message: 'User created successfully',
        user: newUser,
      });
    } catch (error) {
      // Handle errors
      res.status(400).json({ success: false, error: error.message });
    }
  };




  export const specialFunc = (req,res)=>{
    res.json({
        success:true,
        message:"just joking",
    });
  };


export const getUserById = async (req, res) => {
    try {
      const { id } = req.params; 
      const user = await User.findById(id); 
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      res.status(200).json({ success: true, message: "User found", user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params; 
      const user = await User.findById(id); 
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      res.status(200).json({ success: true, message: "Updated", user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };


  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params; 
      const user = await User.findById(id); 
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      await user.remove();
      res.status(200).json({ success: true, message: "User deleted successfully", user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  