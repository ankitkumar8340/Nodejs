import express from "express"
import bcrypt, { hash } from "bcrypt"

const app = express()
app.use(express.json())
app.listen(8000, () => console.log("Server is running"));

const users = [];

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
    const { email, password } = req.body
    const found = users.find((user) => user.email == email)
    const chkPass = await bcrypt.compare(password, found.password)
    if (found) {
        if (chkPass) {
            res.status(200).json({ message: "success" })
        }
        else {
            res.status(401).json({ message: "Invalid pass" })
        }
    }
    else {
        res.status(401).json({ message: "user nopt found" })
    }
})

app.get("/users", (req, res) => {
    res.json(users)
})





