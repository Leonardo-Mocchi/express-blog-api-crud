const express = require("express")
const app = express()
const port = 3000

const cors = require("cors");

const postsRouters = require("./routers/posts")
const serverErrorsHandler = require("./middlewares/server_error_handler");
const notFoundHandler = require("./middlewares/not_found");

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.static('public'));

app.use(express.json());

app.post("/", (req, res) => {
    // dentro req.body troveremo i dati ricevuti in formato json
    console.log(req.body);
})


app.listen(port, () => {
    console.log(`Blog running on port: ${port}
@ http://localhost:3000/`)
})

app.get('/', (req, res) => {
    // remove comment below to trigger an error for the serverErrorsHandler
    /* daje.daje(daje) = daje */
    res.send("Blog's Server")
})

app.use("/posts", postsRouters)

app.use(serverErrorsHandler);
app.use(notFoundHandler);