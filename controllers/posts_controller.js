const postsData = require("../data/posts_data")

/* index */
function index(req, res) {
    res.json(postsData)
}

/* show */
function show(req, res) {
    res.send(`Showing post n°${req.params.id}`)
}

/* create */
function create(req, res) {
    res.send("Create a post")
}

/* update */
function update(req, res) {
    res.send(`Update post n°${req.params.id}`)
}

/* modify */
function modify(req, res) {
    res.send(`Modify post n°${req.params.id}`)
}

/* delete */
function destroy(req, res) {
    res.send(`Delete post n°${req.params.id}`)
}

module.exports = { index, show, create, update, modify, destroy };