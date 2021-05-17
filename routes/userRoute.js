const router = require("express").Router();
const user = require("../controllers/userController")
const loginController = require("../controllers/loginController");
const loginmiddleware = require("../middleware/loginMiddlleware");

router.post("/register",user.createUser);
router.get("/register",user.getUser);
router.post("/login",loginController.login)
router.get("/user/profile",loginmiddleware,user.useProfile)
module.exports = router