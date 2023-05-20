const {sequelize} = require("../../connection");
const {TopicModel} = require("../../model/topics.model");
const TopicService = require("../../service/topics.service")

const listar = async function (req, res) {
  console.log("listar topicos controller");
  try {
    const topics = await TopicService.listar(req.query.filtro || "");

    if (topics) {
      res.json({
        success: true,
        topicos: topics,
      });
    } else {
      res.json({
        sucess: true,
        topicos: [],
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
    console.log("actualizar topicos");
    let topicoRetorno = null;

    try{
        topicoRetorno = await TopicService.actualizar(req.body.id, 
                                                    req.body.create_date, 
                                                    req.body.name, 
                                                    req.body.topic_id, 
                                                    req.body.order,
                                                    req.body.priority,
                                                    req.body.color, 
                                                    req.body.owner_user_id
                                                    );

        res.json({
            success: true,
            topic: topicoRetorno
        })
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const eliminar = async function(req, res) {
    console.log("eliminar topicos");
    try{
        const topics = await TopicService.eliminar(req.params.id);
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
    console.log("consultar topicos");
    try{
        const TopicModelResult = await TopicModel.findByPk(req.params.id);

        if(TopicModelResult){
            res.json({
                success: true,
                topico : TopicModelResult
            });
        }else{
            res.json({
                success : true,
                topico : null
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