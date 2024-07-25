import { Request, Response } from "express";
import db from "../db.js";

function login(req:Request, res:Response) {
    
}

interface RegisterRequest extends Request {
    body: {
        name:string,
        email:string,
        password:string,
    }
}



function register(req:RegisterRequest, res:Response) {
    const user = req.body;
    db.users.push(user);
    console.log(db.users);
    res.status(200).send();
    
}
function currentUser(req:Request, res:Response) {
  
}
export default {login, register, currentUser};
