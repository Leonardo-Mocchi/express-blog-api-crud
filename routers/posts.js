const express = require("express")
const router = express.Router()

const postsData = require("../data/posts_data")

/* index */
router.get("/", (req, res) => {
  res.json(postsData)
})

/* show */

// normal text response

/* router.get("/:id", (req, res) => {
  res.send(`Showing post n°${req.params.id}`)
}) */

// BONUS showing the called post
router.get("/:id", (req, res) => {
  if (req.params.id >= 0 && req.params.id <= 5) {
    console.log(`Showing post n°${req.params.id}, the picture is ../public/imgs/posts/${req.params.id}.jpeg`);
    res.send(postsData[req.params.id - 1]);
  } else {
    res.send(`Please insert a valid post number, we currently have ${postsData.length} posts`)
  }
})

/* create */
router.post("/", (req, res) => {
  res.send("Create a post")
})

/* update */
router.put("/:id", (req, res) => {
  res.send(`Update post n°${req.params.id}`)
})

/* modify */
router.patch("/:id", (req, res) => {
  res.send(`Modify post n°${req.params.id}`)
})

/* delete */
router.delete("/:id", (req, res) => {
  res.send(`Delete post n°${req.params.id}`)
})

module.exports = router