const postsData = require("../data/posts_data")

//index
function index(req, res) {
    const tag = req.query.tag;

    if (tag) {
        const filteredPosts = postsData.filter(post => post.tags.includes(tag));
        res.json(filteredPosts);
    } else {
        res.json(postsData);
    }
}
//examples:
// http://localhost:3000/posts?tag=Dolci 
// http://localhost:3000/posts?tag=Ricette%20al%20forno 
// http://localhost:3000/posts?tag=Ricette%20vegetariane

// show
function show(req, res) {
    const slug = req.params.slug;
    const thisPost = postsData.find(thisPost => thisPost.slug === slug);

    if (!thisPost) {
        res.status(404).send(`Error 404: Post not found, we currently have ${postsData.length} posts, try again with a valid name`);
    } else {
        res.json(thisPost);
    }
}

//create
function create(req, res) {
    // Creiamo un nuovo id incrementando l'ultimo id presente
    const newId = postsData[postsData.length - 1].id + 1;
    const newSlug = req.body.title.toLowerCase().replaceAll(" ", "-");

    // Creiamo un nuovo oggetto thisPost
    const newthisPost = {
        id: newId,
        title: req.body.title,
        slug: newSlug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo la nuova thisPost al postsData
    postsData.push(newthisPost);

    // controlliamo
    console.log(postsData);

    // Restituiamo lo status corretto e la thisPost appena creata
    res.status(201);
    res.json(newthisPost);
}

//update
function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const slug = req.params.slug;

    // cerchiamo il thisPost tramite slug
    const thisPost = postsData.find(thisPost => thisPost.slug === slug);

    // Piccolo controllo
    if (!thisPost) {
        res.status(404);
        return res.json({
            error: "Error 404: Post not found",
            message: `We currently have ${postsData.length} posts, try again with a valid name`
        })
    }

    // Aggiorniamo la thisPost
    thisPost.title = req.body.title;
    thisPost.slug = req.body.title.toLowerCase().replaceAll(" ", "-");
    thisPost.content = req.body.content;
    thisPost.image = req.body.image;
    thisPost.tags = req.body.tags;

    // Controlliamo il postsData
    console.log(postsData)

    // Restituiamo la thisPost appena aggiornata
    res.json(thisPost);
}

//modify
function modify(req, res) {
    res.send(`Modify post n°${req.params.id}`)
}

//delete
function destroy(req, res) {
    const slug = req.params.slug;
    const thisPostIndex = postsData.findIndex(post => post.slug === slug);

    if (thisPostIndex === -1) {
        return res.status(404).send(`Error 404: Post not found, we currently have ${postsData.length} posts, please try again with a valid name`);
    } else {
        postsData.splice(thisPostIndex, 1);

        console.log("Updated posts list:", postsData);

        //to display a blank page
        res.status(204).send();
        //alternatively, to display a success message: 
        /* res.status(200).send(`The post n°${id} was successfully deleted!`); */
    }
}

module.exports = { index, show, create, update, modify, destroy };