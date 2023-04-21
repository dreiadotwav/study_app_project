const themes_propertiesController = require('../../controller/themes_properties/themes_properties.controller');

module.exports = function(app) {

    app.get("/themesp/list", themes_propertiesController.listar);
    app.get("/themesp/update", themes_propertiesController.actualizar);
    app.delete("/themesp/delete/:id", themes_propertiesController.eliminar);
}