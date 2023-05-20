const userController = require('../../controller/users/users.controller');
const authMiddleware = require('../../middleware/auth.controller')

module.exports = function(app) {

    /*app.get("/users/list", userController.listar);
    app.get("/users/:id", userController.consultarPorCodigo);
    app.post("/users/update", userController.actualizar);
    app.post("/users/delete/:id", userController.eliminar);
    app.post("/user/login", userController.login);
    app.post("/user/logout", userController.logout);*/

    app.get("/users/list", authMiddleware.auth, userController.listar);
    app.get("/users/:id", authMiddleware.auth, userController.consultarPorCodigo);
    app.post("/users/update", authMiddleware.auth, userController.actualizar);
    app.post("/users/delete/:id", authMiddleware.auth, userController.eliminar);
    //login/logout
    app.post("/user/login", userController.login);
    app.post("/user/logout", authMiddleware.auth, userController.logout);
}