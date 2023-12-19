require('dotenv').config();

const express = require('express');
const stockRoutes = require('./routes/stock.route');
const allRoutes = require('./routes');
const app = express();

app.use(express.json());

app.use('/api/st/', allRoutes);
/*app.use('/api/st/user', userRoutes);*/

app.listen(process.env.PORT, () =>{
    console.log('Sever listening on port ${process.env.PORT}');
})