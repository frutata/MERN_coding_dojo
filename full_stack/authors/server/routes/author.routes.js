const AuthorController = require("../controllers/author.controller");

module.exports = (app)=>{
    // app.get("/api/author", AuthorController.test);
    app.get("/api/author", AuthorController.findAllAuthor);
    app.post("/api/author", AuthorController.createAuthor);
    app.get("/api/author/:id", AuthorController.findOneAuthor);
    app.put("/api/author/:id", AuthorController.updateAuthor);
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
}