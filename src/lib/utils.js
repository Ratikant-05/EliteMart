import jwt from 'jsonwebtoken';

const generateToken = (userId, res)=>{
  const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})

  res.cookie("jwt",token,{
    maxAge: 7*24*60*60*1000, //Milisecond
    httpOnly:true, //prevents attack XXS cross-site scripting attacks
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    Secure: process.env.NODE_ENV!== "development" //true(https)/false(http)
  });

  // process.env.NODE_ENV(development) !== "development"
  // development !== development/production
  return token;
}

export default generateToken;