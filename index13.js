import express from "express"
import bcrypt from "bcrypt"

const app = express()
app.use(express.json())
app.listen(8000, () => console.log("Server is running"));

const users = [];

app.post("/signup", async (req, res) => {
    const body = req.body;
    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;
    users.push(body)
    res.json(users);
})
app.get("/login", async (req, res) => {
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





