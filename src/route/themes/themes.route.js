const themeController = require('../../controller/themes/themes.controller');

module.exports = function(app) {

    app.get("/themes/list", themeController.listar);
    app.get("/themes/update", themeController.actualizar);
    app.get("/themes/delete/:id", themeController.eliminar);
}