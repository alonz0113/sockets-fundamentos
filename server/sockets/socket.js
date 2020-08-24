const { io } = require('../server')


io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente, aca no se puede usar el socket como en el frontend
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // la funcion broadcast es para enviar el mensaje a todos

        /* if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL!!!!!!!'
             });
         } */



    });
});