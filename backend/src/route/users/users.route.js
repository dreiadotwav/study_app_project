const userController = require('../../controller/users/users.controller');
const authMiddleware = require('../../middleware/auth.controller')

module.exports = function(app) {

    app.get("/users/list", userController.listar);
    app.get("/users/:id", userController.consultarPorCodigo);
    app.post("/users/update", userController.actualizar);
    app.post("/users/delete/:id", userController.eliminar);
    app.post("/user/login", userController.login);
    app.post("/user/login", userController.logout);
}