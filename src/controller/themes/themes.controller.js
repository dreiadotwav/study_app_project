const {sequelize} = require("../../connection");
const {ThemeModel} = require("../../model/theme.model");
const ThemeService = require("../../service/themes.service")

const listar = async function (req, res) {
  console.log("listar temas controller");
  try {
    const themes = await ThemeService.listar(req.query.filtro || "");

    if (themes) {
      res.json({
        success: true,
        temas: themes,
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
    console.log("actualizar temas");
    let temaRetorno = null;

    try{
        temaRetorno = await ThemeService.actualizar(req.body.id, 
                                                    req.body.create_date, 
                                                    req.body.name, 
                                                    req.body.descripcion, 
                                                    req.body.keywords, 
                                                    req.body.owner_user_id
                                                    );

        res.json({
            success: true,
            theme: temaRetorno
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
        const themes = await ThemeService.eliminar(req.query.filtro || "");
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
        const ThemeModelResult = await ThemeModel.findByPk(req.params.id);

        if(ThemeModelResult){
            res.json({
                success: true,
                tema : ThemeModelResult
            });
        }else{
            res.json({
                success : true,
                tema : null
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