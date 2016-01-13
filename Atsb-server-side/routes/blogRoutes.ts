/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
import express = require("express");
import blgManager = require("../DataAccess/blogManager");

//var dataContext = new blogManager();
var blogMnger = new blgManager();

var router = express.Router();
//This will print out the request to the console
router.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
});

router.route("/hello")
    .get((req, res) => {
           // res.json("hello!");
            console.log("inside constructor for blogRouter!");   
            res.json(blogMnger.getPosts());
        
});

router.route("/test")
    .get((req, res) => {
            res.json("test!");
            console.log("Inside this!");        
});


export = router;
