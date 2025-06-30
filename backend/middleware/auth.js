import jwt from 'jsonwebtoken';
// it remove the token and add the user id
const authMiddleware =async (req, res, next) => {
    const {token}= req.headers;
    if(!token){
        return res.status(401).json({message: 'No token provided, authorization denied'});
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=token_decode.id;
        next();
    } 
    catch(e){
        console.log(e);
        res.json({
            success: false,
            message: 'Invalid token, authorization denied'
        });
        
    }

}

export default authMiddleware;