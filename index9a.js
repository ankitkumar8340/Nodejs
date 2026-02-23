const express = require('express')
const app = express();
app.listen(8000);
const auth = (req, res, next) =>{
    if(req.url=="./1234"){
        next();
    }
    else{
        console.log("stopped")
    }
}
app.get("/", (req, res)=>{
    res.send("welcome");
})











