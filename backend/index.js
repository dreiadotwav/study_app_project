const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser())
app.use(cors({
    origin: '*'
}));

const userRoute = require("./src/route/users/users.route");
const themeRoute = require("./src/route/themes/themes.route");
const themespropertiesRoute = require("./src/route/themes_properties/themes_properties.route");
 
//Ruta raiz
app.get('/', function (req, res) {
    //Logica.
    res.send('Hello World');
});

app.get('/pagina2', function (req, res) {
    //Logica de negocios
    //esta aqui -Controller

    res.json({application: 'Study APP', version: '1.0.0'});
});

//Llamadas a los routes de los UCs
userRoute(app);
themespropertiesRoute(app);
themeRoute(app);

app.listen(3000);