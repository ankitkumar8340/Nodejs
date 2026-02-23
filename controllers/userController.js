import {users} from "../models/userModel.js"
const getUser = (req, res)=>{
    res.send(users)  //user is json
}

const postUser = (req, res)=>{
    res.send("post request user")
}
export {getUser, postUser};