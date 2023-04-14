const {sequelize} = require("../connection");
const {TopicModel} = require("../model/topic.model");

const listar = async function(textoBuscar) {
    console.log("listar topicos");
    try{
        const topics = await sequelize.query(`SELECT * FROM topics 
                                            WHERE 1=1
                                            AND UPPER(name) LIKE UPPER('%${textoBuscar}') 
                                            AND deleted IS false
                                            ORDER BY id`);
    
        if(topics && topics[0]){
            return topics[0];
        }else{
            return [];
        }
    }catch(error){
        console.log(error)
        throw error
    }
};

const actualizar = async function(id, create_date, name, topic_id, order, priority, color, owner_user_id) {
    console.log("actualizar topicos");
    let topicoRetorno = null;
    const data = {id, create_date, name, topic_id, order, priority, color, owner_user_id}

    try{
        let tpcExiste = null;

        if(id){
            tpcExiste = await TopicModel.findByPk(id);
        }

        if(tpcExiste){
            topicoRetorno = await TopicModel.update(data, {where: {id : id}});
            topicoRetorno = data;
        }else{
            topicoRetorno = await TopicModel.create(data);
        }
        return topicoRetorno;
    }catch(error){
        console.log(error);
        throw error;
    }
};

const eliminar = async function(id) {
    console.log("eliminar topicos");
    try{
        await TopicModel.destroy({where: {id:id}}, {truncate: false});
    }catch(error){
        throw error;
    }
};

const consultarPorCodigo = async function(id) {
    console.log("consultar por codigo");
    try{
        const TopicModelResult = await TopicModel.findByPk(id);

        if(TopicModelResult){
            return TopicModelResult;
        }else{
            return [];
        }
    }catch(error){
        console.log(error);
        throw error;
    }
};

module.exports = {
    listar, actualizar, eliminar, consultarPorCodigo
};