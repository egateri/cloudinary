const express = require('express');
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signup');
const PORT = process.env.PORT||8000;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended :false}));
app.use(express.json());
app.use(express.static("public"));
app.use(homeRouter);
app.use(loginRouter);
app.use(signUpRouter);
app.listen(PORT,() => {
    console.log("Server listening to PORT :"+PORT);
});

