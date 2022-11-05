const { clientesModelo } = require("../dominios/clientes");


//funcion mostrar  todos los clientes ordena por nombre

const mostrarc = async () => {
    const cliente = await clientesModelo.find().sort({nombre:1});
    console.log(cliente);
}


//funcion mostrar pot id
const mostrarcxId = async (id) => {
    const cliente = await clientesModelo.find({_id:id});
    console.log(cliente);
}

//funcion insercion de un cliente

const crearc = async() =>{
    const cliente = new clientesModelo({

        
        _id: 5,
        nombre: 'santigo',
        apellidos: 'bernabeu',
        direccion: 'cra 72',
        cuenta:{ 
          id: 5,
          numero: 0987464,
          tipo: 'ahorros',
          saldo: 200000
        }



    })
    var resultado = cliente.save();
    await mostrarc();
    console.log('CLIENTE INGRESADO');
}

//funcion actualizar un cliente

const actualizarc = async(id) => {
    await clientesModelo.updateOne({_id:id},{
$set:{
    direccion: 'calle 55',
    
    
}
    }).then(()=> console.log('ACTUALIZACION REALIZADA'));
   
}

//funcion elimianr un cliente

const eliminarc = async (id) => {
    await clientesModelo.deleteOne({_id:id});
    console.log('CLIENTE CON EL ID  '+ id + ' FUE ELIMINADO')
    await mostrarc();
}

//exportamos las funciones para que puedan se utilizadas 
module.exports = {mostrarc, mostrarcxId,crearc,actualizarc,eliminarc}