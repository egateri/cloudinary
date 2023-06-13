const express = require('express');
const router = express.Router();
router.get('/login', (req, res)=>{
    console.log("This is login page!");
    res.render("login",{title:"Login Page"});
})
module.exports = router;