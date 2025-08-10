import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("server is running")
});

app.listen(5001, () =>{
    console.log("server is running on port 5001"); 
});