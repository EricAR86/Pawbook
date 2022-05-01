const router = require("express").Router()
const Post = require("../models/Post.model")

router.get("/dashboard", (req, res) => {
    Post.find()
        .then(posts => {
            res.render("dashboard/lista-post", { posts })
        })
        .catch(console.log)
})


module.exports = router;