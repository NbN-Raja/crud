const { getMaxListeners } = require("../app");
const User = require("../model/usersSchema")
const db = require("../model/db")


module.exports = {
  get: (req, res) => {
    res.render("register", { title: "Express" });
  },

  post: (req, res) => {
    const {
      firstname,
      email,
      city,
      password,
      lastname,
      age,
      address,
      birthdate,
      course,
    } = req.body;
    if (!firstname || !email || !password || !lastname || !city || !password) {
      console.log("Fill empty fields");
    } else {
      const newUser = new User({
        firstname,
        lastname,
        address,
        age,
        birthdate,
        city,
        course,
        email,
        password,
      });

      newUser
        .save()
        .then(res.redirect("/login"))
        .catch((err) => console.log(err));
    }
  },
  
}



