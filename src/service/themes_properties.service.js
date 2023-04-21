
const { sequelize } = require("../connection");
const { ThemePropertiesModel } = require("../model/theme_properties.model");

const listar = async function (textoBuscar) {
  console.log("listar themes properties service");

  try {
    const theme_properties = await sequelize.query(`SELECT * FROM themes_properties 
                                                    WHERE 1=1
                                                    AND property_name LIKE '%${textoBuscar}%'
                                                    ORDER BY id`
    );

    if (theme_properties) {
      
      return theme_properties[0];

    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const consultarPorCodigo = async function (id) {
  console.log("Buscar theme properties service");

  try {

    const ThemePropertiesModelResult = await ThemePropertiesModel.findByPk(id);

    if (ThemePropertiesModelResult) {
      
      return ThemePropertiesModelResult;
    } else {
      return []
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const actualizar = async function (id, theme_id, property_name, property_value) {
  console.log("actualizar themes properties service");
  let themePropertyRetorno = null;
  const data = {id, theme_id, property_name, property_value}

  try {

    let tmsExiste = null;

    if (id) {
      tmsExiste = await ThemePropertiesModel.findByPk(id);
    }
    if (tmsExiste) {
      
      themePropertyRetorno = await ThemePropertiesModel.update(data, { where: { id: id } });

    } else {

      themePropertyRetorno = await ThemePropertiesModel.create(data);
    }

    return themePropertyRetorno;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const eliminar = async function (id) {
  console.log("eliminar themes properties service");

  try {
    await ThemePropertiesModel.destroy( { where: { id: id } });

    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  listar,
  actualizar,
  eliminar,
  consultarPorCodigo
};
