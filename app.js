const express = require('express');
const app = express();

app.use(express.json());

const librosRoute = require('./routes/libros');

const errorHandler = require('./middleware/errorHndler');

app.use('/libros', librosRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('servicio iniciado en el puerto 3000.');
});
