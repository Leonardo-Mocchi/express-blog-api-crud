const postsData = require("../data/posts_data")

/* index */
function index(req, res) {
    res.json(postsData);
}

/* show */
function show(req, res) {
    const id = parseInt(req.params.id)
    const thisPost = postsData.find(thisPost => thisPost.id === id);

    if (!thisPost) {
        res.status(404).send(`Error 404: Post not found, we currently have ${postsData.length} posts, try again with a valid number`);
    } else {
        res.json(thisPost);
    }
}

/* res.send(`Showing post n°` + req.params.id + postsData[req.params.id - 1]) */
/* res.send('Dettagli della pizza ' + req.params.id); */

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
    const id = parseInt(req.params.id);
    const thisPostIndex = postsData.findIndex(post => post.id === id);

    if (thisPostIndex === -1) {
        return res.status(404).send(`Error 404: Post not found, we currently have ${postsData.length} posts, please try again with a valid number`);
    } else {
        postsData.splice(thisPostIndex, 1);

        console.log("Updated posts list:", postsData);

        res.status(204).send();
    }
}

module.exports = { index, show, create, update, modify, destroy };