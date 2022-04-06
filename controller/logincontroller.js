const { redirect, send } = require("express/lib/response");
const User = require("../model/usersSchema")

module.exports = {
  get: (req, res) => {
    res.render("login");
  },

  post: (req, res, result) => {
    const { email, password } = req.body;
    console.log(req.userdata);

    User.find({ email: email })
      .exec()
      .then((user) => {
        if (user.length < 1) {
          res.status(404).json({
            message: "username not found",
          });
        } else {
          res.redirect("/about");
        }
      });
  },
};