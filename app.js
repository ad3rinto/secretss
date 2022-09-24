//jshint esversion:6
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const session = require("express");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");




const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vdlpgxh.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURL, {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    email:String,
    password:String
});



const User = new mongoose.model("User", userSchema);



app.get("/", function(req, res){
    res.render("home");
});


app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", function(req, res){
<<<<<<< HEAD
    
=======
    const newUser = new User ({
        email:req.body.username,
        password:md5(req.body.password)
    });
    newUser.save(function(err){
        if (err){
            console.log(err)
        } else {
            res.render("secrets")
        }
    });
>>>>>>> a9fa27d84acffa4d955b5272b1f7da5fd82e3375
});


app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = md5(req.body.password);
    User.findOne({email: username}, function(err, foundUser){
        if(err){
            console.log(err)
        } else {
            if(foundUser){
                if(foundUser.password === password){
                    res.render("secrets")
                }
            }
        }
    })
});





app.listen(3000, function(){
    console.log("Server started on port 3000")
});

