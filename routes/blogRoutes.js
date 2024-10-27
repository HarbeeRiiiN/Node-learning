const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
// blog routes
// Note: /blogs/create must be placed before /blog/:id
router.get("/blogs/create", blogController.blog_create_get);

router.get("/blogs", blogController.blog_index);

router.post("/blogs", blogController.blog_create_post);

router.get("/blogs/:id", blogController.blog_details);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
