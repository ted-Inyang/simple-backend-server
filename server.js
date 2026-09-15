const express = require("express");
const app = express ();
app.get("/",(req, res) => {res.send("my first backend server is running!");}); 
app.get("/about",(req, res) => { 
    res.json({
    name:"Ted", 
    course: "AI Backend Engineer Bootcamp",
    message: "I am Learning Node.js and Express"
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);   
});
 