const mongoose = require('mongoose');

//creamos el esquema clientes 
const clientesSchema = mongoose.Schema(
    {       
        _id: Number,
        nombre: String,
        apellidos: String,
        direccion: String,
        cuenta:{ 
          id: Number,
          numero: Number,
          tipo: String,
          saldo: Number}
    }
    , {versionKey: false})
    
    
    
    const clientesModelo = mongoose.model('CLIENTES', clientesSchema,"CLIENTES");

    module.exports = {clientesSchema, clientesModelo}
