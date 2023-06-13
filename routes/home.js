const express = require('express');
const router = express.Router();
router.get('/',(req, res) =>{

    console.log("I am now at home page!");

    res.render("home",{title:"Home Page"});
}


);

module.exports =router;