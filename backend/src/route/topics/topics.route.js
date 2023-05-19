const topicController = require('../../controller/topics/topics.controller');

module.exports = function(app) {

    app.get("/topics/list", topicController.listar);
    app.get("/topics/:id", topicController.consultarPorCodigo);
    app.post("/topics/update", topicController.actualizar);
    app.post("/topics/delete/:id", topicController.eliminar);
}