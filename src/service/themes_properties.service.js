const {sequelize} = require("../connection");
const {Themes_propertiesModel} = require("../model/themes_properties.model");

const listar = async function(textoBuscar) {
    console.log("listar themes_properties");
    try{
        const themes_properties = await sequelize.query(`SELECT * FROM themes_properties 
                                            WHERE 1=1
                                            AND UPPER(name) LIKE UPPER('%${textoBuscar}') 
                                            AND deleted IS false
                                            ORDER BY id`);
    
        if(themes_properties && themes_properties[0]){
            return themes_properties[0];
        }else{
            return [];
        }
    }catch(error){
        console.log(error)
        throw error
    }
};

const actualizar = async function(id, theme_id, property_name, property_value) {
    console.log("actualizar temas propiedades");
    let themes_propertieoRetorno = null;
    const data = {id, theme_id, property_name, property_value}

    try{
        let tmprExiste = null;

        if(id){
            tmprExiste = await Themes_propertiesModel.findByPk(id);
        }

        if(tmprExiste){
            themes_propertieoRetorno = await Themes_propertiesModel.update(data, {where: {id : id}});
            themes_propertieoRetorno = data;
        }else{
            themes_propertieoRetorno = await Themes_propertiesModel.create(data);
        }
        return themes_propertieoRetorno;
    }catch(error){
        console.log(error);
        throw error;
    }
};

const eliminar = async function(id) {
    console.log("eliminar themes_properties");
    try{
        await Themes_propertiesModel.destroy({where: {id:id}}, {truncate: false});
    }catch(error){
        throw error;
    }
};

const consultarPorCodigo = async function(id) {
    console.log("consultar por codigo");
    try{
        const Themes_propertiesModelResult = await Themes_propertiesModel.findByPk(id);

        if(Themes_propertiesModelResult){
            return Themes_propertiesModelResult;
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