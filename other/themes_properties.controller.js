const {sequelize} = require("../../connection");
const {Themes_propertiesModel} = require("../../model/themes_properties.model");
const Themes_propertiesService = require("../../service/themes_properties.service")

const listar = async function (req, res) {
  console.log("listar temas propiedades controller");
  try {
    const themes_properties = await Themes_propertiesService.listar(req.query.filtro || "");

    if (themes_properties) {
      res.json({
        success: true,
        temas: themes_properties,
      });
    } else {
      res.json({
        sucess: true,
        temas: [],
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      error: error.message,
    });
  }
};

const actualizar = async function(req, res) {
    console.log("actualizar temas_propiedades");
    let temaPRetorno = null;

    try{
        temaPRetorno = await Themes_propertiesService.actualizar(req.body.id, 
                                                    req.body.theme_id, 
                                                    req.body.property_name, 
                                                    req.body.property_value
                                                    );

        res.json({
            success: true,
            themes_properties: temaPRetorno
        })
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const eliminar = async function(req, res) {
    console.log("eliminar temas");
    try{
        const themes_properties = await Themes_propertiesService.eliminar(req.query.filtro || "");
        res.json({
            success: true
        });
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const consultarPorCodigo = async function(req, res) {
    console.log("consultar temas");
    try{
        const Themes_propertiesModelResult = await Themes_propertiesModel.findByPk(req.params.id);

        if(Themes_propertiesModelResult){
            res.json({
                success: true,
                temas_propiedades : Themes_propertiesModelResult
            });
        }else{
            res.json({
                success : true,
                temas_propiedades : null
            });
        }
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    listar, actualizar, eliminar, consultarPorCodigo
};