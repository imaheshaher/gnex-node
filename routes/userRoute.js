const router = require("express").Router();
const user = require("../controllers/userController")

router.post("/register",user.createUser);
router.get("/register",user.getUser);


module.exports = router