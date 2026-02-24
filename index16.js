import express from "express"
import jwt from "jsonwebtoken"
import bcrypt, { hash } from "bcrypt"
import { middleware, authorize } from "./middleware/middleware.js"
const secret = "lpu"
const app = express()
app.use(express.json())
app.listen(8081, () => console.log("Server is running"));

const users = [];

// const middleware = (req, res, next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader){
//        return res.status(401).json({message:"Token missing"})
//     }
//     const token = authHeader.split(" ")[1];
//     try{
//         const decode = jwt.verify(token, secret);
//         req.user= decode;
//         next();
//     }
//     catch(err){
//         return res.status(401).json({message:"Invalid token"})
//     }
// }

// const authorize = (...role) =>{
//     return (req, res, next)=>{
//         if(!role.includes(req.user.role)){
//             return res.status(403).json({message:"not found"})
//         }
//         next();
//     }
   
// }

app.post("/signup", async (req, res) => {
    const {name, email, password, role} = req.body;
    if(!email || !password){
       return res.status(400).json({message:"email and password not working"})
    }
    // const body = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
        name,
        email,
        password:hashPassword,
        role
    }
    users.push(user)

    res.status(201).json(users);
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

     
        const foundUser = users.find(user => user.email === email);
        if (!foundUser) {
            return res.status(401).json({ message: "User not found" });
        }

 
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // res.status(200).json({ message: "Login successful" })
        const token = jwt.sign(
            {email:foundUser.email, role:foundUser.role},
            secret,
            {expiresIn:"1h"}
        )
        res.status(200).json({ message: "Login successful", token })
        // const token = jwt.sign()

    } catch (error) {
        res.status(500).json({ message: "Server error during login"});
    }
});

app.get("/users", middleware, authorize("Admin", "instructor"), (req, res) => {
    res.json(users)
})

app.get("/",middleware, (req, res)=>{
    res.send("hello world")
})





