const {sequelize} = require("../connection");
const {ThemeModel} = require("../model/themes.model");

const listar = async function(textoBuscar) {
    console.log("listar temas");
    try{
        const themes = await sequelize.query(`SELECT * FROM themes 
                                            WHERE UPPER(name) LIKE UPPER('%${textoBuscar}')
                                            ORDER BY id`);
    
        if(themes && themes[0]){
            return themes[0];
        }else{
            return [];
        }
    }catch(error){
        console.log(error)
        throw error
    }
};

const actualizar = async function(id, create_date, name, description, keywords, owner_user_id) {
    console.log("actualizar temas");
    let temaRetorno = null;
    const data = {id, create_date, name, description, keywords, owner_user_id}

    try{
        let thmExiste = null;

        if(id){
            thmExiste = await ThemeModel.findByPk(id);
        }

        if(thmExiste){
            temaRetorno = await ThemeModel.update(data, {where: {id : id}});
            temaRetorno = data;
        }else{
            temaRetorno = await ThemeModel.create(data);
        }
        return temaRetorno;
    }catch(error){
        console.log(error);
        throw error;
    }
};

const eliminar = async function(id) {
    console.log("eliminar temas");
    try{
        const themes = await ThemeModel.findByPk(id);
        if (themes) {
          await ThemeModel.destroy({
            where: { id: id },
          });
          return true;
        } else {
          return false;
        }
      } catch (error) {
        throw error;
      }
};

const consultarPorCodigo = async function(id) {
    console.log("consultar por codigo");
    try{
        const themes = await ThemeModel.findByPk(id);

        if(themes){
            return themes;
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