const express = require("express");
const router = express.Router();
const usersRoute = require("./user/user.routes");
const loginRoute = require("./login/login.routes");


router.use("/users", (req, res) => {
    res.send('Successful');
})

router.use("/login", loginRoute);

module.exports = router;