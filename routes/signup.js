const express = require('express');
const router = express.Router();
router.get('/signup',(req, res)=>{
    console.log("This sign up page!");
    res.render("signup",{title:"Sign Up"});
})
module.exports = router;