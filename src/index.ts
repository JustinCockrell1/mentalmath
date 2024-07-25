import express from "express";
import authentication from "./controllers/authentication.js";

const app = express();

app.listen(3000, ()=>{
    console.log("Server started on 3000");
    
});

app.get("/", (req, res)=>{
    res.send("hello");
})

//Pages
app.get("/login");

//API
app.post("/api/login", authentication.login);
app.post("/api/register", authentication.register);
app.post("/api/currentUser", authentication.currentUser);
