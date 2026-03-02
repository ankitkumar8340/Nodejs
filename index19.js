import express from "express"
const app = express();
const PORT = process.argv[2]; //node[0]x, index19.js[1], 8080[2] --> that is why we pass argv[2];
//helps in load balancing
app.listen(PORT, ()=>{
    console.log("Server is runing");
})

app.get("/", (req,res)=>{
    res.send(`this is server runing on port ${PORT}`)
})











