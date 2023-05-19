const { ThemePropertiesModel } = require("../../model/theme_properties.model");
const ThemePropertyService = require("../../service/themes_properties.service" );

const listar = async function (req, res) {
  console.log("listar propiedades de los temas");

  try {
    const themes_properties = await ThemePropertyService.listar(req.query.filtro || '');

    if (themes_properties) {
      res.json({
        success: true,
        tema_properties: themes_properties,
      });
    } else {
      res.json({
        success: true,
        tema_properties: [],
      });
    }
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

const consultarPorCodigo = async function (req, res) {
  console.log("Buscar propiedades de tema");

  try {
    const ThemesPModelResult = await ThemePropertiesModel.findByPk(req.params.id);

        if(ThemesPModelResult){
            res.json({
                success: true,
                usuario : ThemesPModelResult
            });
        }else{
            res.json({
                success : true,
                usuario : null
            });
        }
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};
const actualizar = async function (req, res) {
  console.log("actualizar propiedades de los temas");
  let temaPropertyRetorno = null;

  try {
    temaPropertyRetorno = await ThemePropertyService.actualizar(req.body.id, 
                                                                req.body.theme_id, 
                                                                req.body.property_name, 
                                                                req.body.property_value);

    res.json({
      success: true,
      theme_properties: temaPropertyRetorno,
    });
  
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
    });
  }
};

const eliminar = async function (req, res) {
  console.log("eliminar propiedades de los temas");

  try {

    const themePropertyRetorno = await ThemePropertyService.eliminar(req.params.id);

    res.json({
      success: themePropertyRetorno,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  listar,
  actualizar,
  eliminar,
  consultarPorCodigo
};
