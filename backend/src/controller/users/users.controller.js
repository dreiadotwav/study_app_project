const {sequelize} = require("../../connection");
const {UserModel} = require("../../model/user.model");
const UserService = require("../../service/users.service")

const listar = async function (req, res) {
  console.log("listar usuarios controller");
  try {
    const users = await UserService.listar(req.query.filtro || "");

    if (users) {
      //en users[0] se encuentra el listado de lo que se recupera desde el sql
      res.json({
        success: true,
        usuarios: users,
      });
    } else {
      res.json({
        sucess: true,
        usuarios: [],
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
    console.log("actualizar usuarios");
    let usuarioRetorno = null;

    try{
        usuarioRetorno = await UserService.actualizar(req.body.id, 
                                                    req.body.name, 
                                                    req.body.last_name, 
                                                    req.body.avatar, 
                                                    req.body.email, 
                                                    req.body.password, 
                                                    req.body.deleted);

        res.json({
            success: true,
            user: usuarioRetorno
        })
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const eliminar = async function(req, res) {
    console.log("eliminar usuarios");
    try{
        await sequelize.query("UPDATE users SET deleted = true WHERE id = " +req.params.id);
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
    console.log("consultar usuarios");
    try{
        const UserModelResult = await UserModel.findByPk(req.params.id);

        if(UserModelResult){
            res.json({
                success: true,
                usuario : UserModelResult
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

module.exports = {
    listar, actualizar, eliminar, consultarPorCodigo
};