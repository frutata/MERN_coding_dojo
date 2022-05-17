const JokesController = require("../controllers/joke.controller");

module.exports = (app)=>{
    app.get("/api/jokes/test", JokesController.test);
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes", JokesController.createJokes);
    app.get("/api/jokes/random", JokesController.findRandomJokes);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);
}