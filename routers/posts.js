const express = require("express")
const router = express.Router()

const postsController = require("../controllers/posts_controller")

//index
router.get("/", postsController.index)

//show
router.get("/:slug", postsController.show)

//create
router.post("/", postsController.create)

//update
router.put("/:slug", postsController.update)

//modify
router.patch("/:slug", postsController.modify)

//delete
router.delete("/:slug", postsController.destroy)

module.exports = router