const postsRouters = require("./routers/posts")

const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Blog running on port:`, port)
})

app.get('/', (req, res) => {
    res.send("Blog's Server")
})

app.use("/posts", postsRouters)