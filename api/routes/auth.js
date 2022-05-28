//This Router() is used when you want to create a new router object in your program to handle requests.
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
// The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
// Create a router file named index.js in the app directory, with the following content:



// middleware that is specific to this router


//REGISTER  Create New User using post method
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// the above is middleware that is specific to this router
//exports the router where it is imported in index.js as "const authRoute = require("./routes/auth");""
module.exports = router;