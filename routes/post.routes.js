
const router = require("express").Router()
const Post = require("./models/Post.model");

router.get("/post/new", (req, res, next) => {
    res.render("postLikesComment/post")
})

router.post("/post/new", (req, res, next) => {
    Post.create(req.body)
    .then(() => {
        res.redirect("/")
    })
    .catch(error => console.log(error))
})

module.exports = router