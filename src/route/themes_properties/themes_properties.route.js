const themePropertyController = require('../../controller/themes_properties/theme_properties.controller');


module.exports = function(app) {

    app.get("/themes-properties/list", themePropertyController.listar);
    app.get("/themes-properties", themePropertyController.consultarPorCodigo);
    app.post("/themes-properties/update", themePropertyController.actualizar);
    app.delete("/themes-properties/delete/:id", themePropertyController.eliminar);
}