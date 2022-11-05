const { movimientosModelo } = require("../dominios/movimientos");

//funcion mostrar todos los movimientos orden apor id


const mostrarm = async () => {
    const movimiento = await movimientosModelo.find().sort({_id:1});
    console.log(movimiento);
}

//funcion mostrar por un id en particular

const mostrarmxId = async (id) => {
    const movimiento = await movimientosModelo.find({_id:id});
    console.log(movimiento);
}


//funcion para crear un movimiento

const crearm = async() =>{
    const movimiento = new movimientosModelo({

        
        _id: 10,
        cliente: 'amin',
        no_cuenta: 211663,
        tipo_cuenta: 'Ahorros',
        sede: 'CC Buenavista',
        retiros: 50000,
        consignaciones: 90000,
        banco:'Colpatria'
        



    })
    var resultado = movimiento.save();
    await mostrarm();
    console.log('TRANSACCION GUARDADA');
}

//funcion actualiza algun movimiento po id

const actualizarm= async(id) => {
    await movimientosModelo.updateOne({_id:id},{
$set:{
    tipo_cuenta: 'Ahorros',
    
}
    }).then(()=> console.log('ACTUALIZACION REALIZADA'));
   
}

//funcion para elimiar un movimiento

const eliminarm = async (id) => {
    await movimientosModelo.deleteOne({_id:id});
    console.log('MOVIMIENTO CON EL ID  '+ id + ' FUE ELIMINADO')
    await mostrarm();
}


//calculos estadisticos

const calculos1 = async () => {
    console.log("CANTIDAD DE CLIENTES X TIPO DE CUENTA");
    const consul1 = await movimientosModelo.aggregate([{$group:{_id:"$tipo_cuenta", numeroclientes:{$sum:1}}}]);
    console.log(consul1);
}


const calculos2 = async () => {
    console.log("SUMATORIA CONSIGNACIONES Y RETIROS X TIPO DE CUENTA");
    const consul2 = await movimientosModelo.aggregate([{$group:{_id:"$tipo_cuenta", sumaretiros:{$sum:"$retiros"},sumaconsig:{$sum:"$consignaciones"}}}]);
    console.log(consul2);
}

const calculos3 = async () => {
    console.log("PROMEDIO CONSIGNACIONES Y RETIROS X TIPO DE CUENTA");
    const consul3 = await movimientosModelo.aggregate([{$group:{_id:"$tipo_cuenta", proretiros:{$avg:"$retiros"},proaconsig:{$avg:"$consignaciones"}}}]);
    console.log(consul3);
}

const calculos4 = async () => {
    console.log("MAXIMOS Y MINIMOS CONSIGNACIONES Y RETIROS X TIPO DE CUENTA");
    const consul4 = await movimientosModelo.aggregate([{$group:{_id:"$tipo_cuenta", maxretiros:{$max:"$retiros"},minretiros:{$min:"$retiros"},maxconsig:{$max:"$consignaciones"},minconsig:{$min:"$consignaciones"}}}]);
    console.log(consul4);
}

const calculos5 = async () => {
    console.log("SALDO CONSIGNACIONES Y RETIROS X TIPO DE CUENTA");
    const consul5 = await movimientosModelo.aggregate([{$group:{_id:"$tipo_cuenta", saldot:{$sum:{$subtract:["$consignaciones","$retiros"]}}}}]);
    console.log(consul5);
}

const calculos6 = async () => {

    console.log("TOTALES X BANCO");
    const consul6 = await movimientosModelo.aggregate([{$group:{_id:"$banco",sumaretiros:{$sum:"$retiros"},sumaconsig:{$sum:"$consignaciones"}}}]);
    console.log(consul6);

}

    


// aca exportamos  el modulo para que se puedan usar las funciones 
module.exports = {mostrarm, mostrarmxId,crearm,actualizarm,eliminarm,calculos1,calculos2,calculos3,calculos4,calculos5,calculos6}