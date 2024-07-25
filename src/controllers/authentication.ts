import { Request, Response } from "express";
import db from "../db.js";

function login(req:Request, res:Response) {
    
}

interface RegisterRequest extends Request {
    body: {
        name:string,
    }
}



function register(req:RegisterRequest, res:Response) {
    const user = req.body.name;
    db.users = {}
}
function currentUser(req:Request, res:Response) {
  
}
export default {login, register, currentUser};
