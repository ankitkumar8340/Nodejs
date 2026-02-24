
const middleware = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
       return res.status(401).json({message:"Token missing"})
    }
    const token = authHeader.split(" ")[1];
    try{
        const decode = jwt.verify(token, secret);
        req.user= decode;
        next();
    }
    catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
}

const authorize = (...role) =>{
    return (req, res, next)=>{
        if(!role.includes(req.user.role)){
            return res.status(403).json({message:"not found"})
        }
        next();
    }
   
}

export {middleware, authorize}