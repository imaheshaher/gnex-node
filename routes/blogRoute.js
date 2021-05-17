const router = require("express").Router();
const blog = require("../controllers/blogController")
const upload = require("../middleware/upload")
const loginmiddleware = require("../middleware/loginMiddlleware")
router.post("/",[upload.single('blog_image')],blog.createBlog);
router.get("/",loginmiddleware,blog.getBlog);
router.delete("/:id",blog.deleteBlog)

module.exports = router