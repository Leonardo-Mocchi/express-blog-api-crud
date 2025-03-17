const postsRouters = require("./routers/posts")

const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'));

app.use(express.json());

app.post("/", (req, res) => {
    // dentro req.body troveremo i dati ricevuti in formato json
    console.log(req.body);
})


app.listen(port, () => {
    console.log(`Blog running on port:`, port)
})

app.get('/', (req, res) => {
    res.send("Blog's Server")
})

app.use("/posts", postsRouters)