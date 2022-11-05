const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/CRUD';


mongoose.connect(uri, {
} ).then(()=> console.log('CONEXION EXITOSA!'))
.catch((e)=> console.log('ALGO ESTA MAL: '+ e));

module.exports = uri;
