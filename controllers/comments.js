const Comment = require("../models/Comment");

module.exports = {
//   I don't believe I need a getProfile method.
//   getProfile: async (req, res) => {
//     try {
//       const posts = await Post.find({ user: req.user.id });
//       res.render("profile.ejs", { posts: posts, user: req.user });
//     } catch (err) {
//       console.log(err);
//     }
//   },
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        property: req.params.id,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName,
      });
      console.log("Comment has been added!");
      res.redirect(`/property/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/property/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find post by id
      let comment = await Comment.findById({ _id: req.params.id });
      // Delete post from db
      await Comment.remove({ _id: req.params.id });
      console.log("Deleted Comment");
      res.redirect(`/property/${req.params.id}`);
    } catch (err) {
      res.redirect(`/property/${req.params.id}`);
    }
  },
};
