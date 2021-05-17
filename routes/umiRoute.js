const router = require("express").Router();
const testController = require("../controllers/testController")

router.get("/user",testController.user)
router.get("/unblock",testController.unBlockUser)


module.exports = router