const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const decrypt = await bcrypt.compare(password, user.password);
      if (decrypt) {
        jwt.sign(
          { email: user.email, id: user._id },
          process.env.SECRET,
          {},
          (err, token) => {
            if (err) throw err;
            res.send({ token: token, user:user, state: true }).json(user);
          }
        );
      }else{
        res.send({error:"Password is Wrong"})
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  if (user) {
    console.log("User Already Exists!!");
  } else {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: req.body.role,
    });
    user
      .save()
      .then(() => {
        console.log("New object saved to MongoDB!" + user);
        res.send({ status: true });
      })
      .catch((error) => {
        console.error("Error saving object to MongoDB:", error);
      });
  }
};

module.exports = { login, signup };
