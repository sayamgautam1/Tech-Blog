const router = require("express").Router();
const { User, Post, Comment } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // get all the posted blogs till date

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it

    const posts = postData.map((post) => post.get({ plain: true }));

    // pass serialized data and session flag into handle bar template to render

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add login route

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
