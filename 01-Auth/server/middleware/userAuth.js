import jwt from 'jsonwebtoken';


const userAuth=(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.status(401).json({msg:'Access denied. No token provided.'});
    }
    try{
      const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
      if(tokenDecode.id){
        req.body.userId=tokenDecode.id
      }else{
        return res.status(401).json({msg:'Access denied. Not Authorised Login again.'});
      }

      next();

    }catch(error){
        res.json({success:false,message : error.message});
    }


}

export default userAuth;