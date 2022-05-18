const UseController = require("../controllers/user.controller");

module.exports = (app)=>{
    app.get("/api/user", UseController.findAllUser);
    app.post("/api/user", UseController.createUser);
    app.get("/api/user/:id", UseController.findOneUser);
    app.put("/api/user/:id", UseController.updateUser);
    app.delete("/api/user/:id", UseController.deleteUser);
}