import User from '../Model/userModel.js';
import bcrypt from 'bcrypt';

export const signupController = async (req,res)=>{
  try {
    const {fullName,email,password} = req.body;

    if(password.length<6){
      return res.status(400).json({message: "Password must be atleast 6 characters"});
    }

    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({message: "User already exist"});
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password,salt);

    const newUser = await User({
      fullName,
      email,
      password:hashedPass
    })
    
    await newUser.save();

    res.status(201).json("User Created Successfully");

  } catch (error) {
    console.log("Error in Sign Up Controller",error.message);
    res.status(500).json({error: "Internal Server Error"})
  }
}

// export const loginController = ()=>{

// }

// export const logoutController = ()=>{

// }

// export const updateProfileController = ()=>{

// }

// export const checkAuthController = ()=>{

// }
