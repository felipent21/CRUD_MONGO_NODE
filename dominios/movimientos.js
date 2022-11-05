const mongoose = require('mongoose');

//creamos el esquema movimientos
const movimientosSchema = mongoose.Schema(
    {       
        _id: Number,
        cliente: String,
        no_cuenta: Number,
        tipo_cuenta: String,        
        sede: String,
        retiros: Number,
        consignaciones: Number,
        banco: String
    }
    , {versionKey: false})
    
    
    
    const movimientosModelo = mongoose.model('Movimientos_Bancarios', movimientosSchema,"Movimientos_Bancarios");

    module.exports = {movimientosSchema, movimientosModelo}
