
//DSs

const Pet = require("/pet/creat").Router()
const Post = require("./models/Pet.model");

router.get("/post/new", (req, res, next) => {
    res.render("postLikesComment/post")
})

router.post("/post/new", (req, res, next) => {
    
})

module.exports = router

//dswdd
const Pet = require("../models/Pet.model");
const { redirect } = require("express/lib/response");
const router = require("express").Router();

router.get("/pet/create",(req,res,next)=>{
    res.render("/pet/create")
});

router.post("pet/create",(res,req,next)=>{

    Pet.create(req.body)
    .then(datos=>{
        console.log("petCreated",datos)
        res.send(datos)
    })
    .catch(console.log)
})

module.exports = router;