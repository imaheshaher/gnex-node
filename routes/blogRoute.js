const router = require("express").Router();
const blog = require("../controllers/blogController")
const upload = require("../middleware/upload")

router.post("/",upload.single('blog_image'),blog.createBlog);
router.get("/",blog.getBlog);
router.delete("/:id",blog.deleteBlog)

module.exports = router