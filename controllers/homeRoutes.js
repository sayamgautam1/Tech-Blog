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
// get each post of the blog

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(post);
    console.log(comments);

    // pass serialized data to the rendered page
    res.render("post", {
      post,
      comments,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get dashboard when user login

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // find the logged in user based on the session id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post

router.get("/write-post", (req, res) => {
  if (req.session.logged_in) {
    res.render("writepost", {
      logged_in: true,
    });
  }
});

// edit existing post

router.get("/edit-post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });
    console.log(post);

    res.render("editpost", { post, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit existing comments

router.get("/edit-comment/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);

    const comment = commentData.get({ plain: true });
    console.log(comment);

    res.render("editcomment", { comment, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add login route

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// add logout route

router.get("/logout", (req, res) => {
  res.redirect("/");
});
module.exports = router;
