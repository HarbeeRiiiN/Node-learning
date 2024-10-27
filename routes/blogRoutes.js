const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
// blog routes
// Note: /blogs/create must be placed before /blog/:id
router.route("/blogs/create").get(blogController.blog_create_get);

router.route("/blogs").get(blogController.blog_index);

router.route("/blogs").post(blogController.blog_create_post);

router.route("/blogs/:id").get(blogController.blog_details);

router.route("/blogs/:id").delete(blogController.blog_delete);

module.exports = router;
