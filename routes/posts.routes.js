const router = require("express").Router();

/* GET home page */
router.get("/posts", (req, res, next) => {
  res.render("posts");
});

module.exports = router;
