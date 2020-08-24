var socket = io();

// Escuchar sucesos el on
socket.on('connect', function() {

    console.log('Conectado al servidor');

})

socket.on('disconnect', function() {

    console.log('perdimos conexion con el servidor');
});

// Enviar informacion los emit, no usar caracteres especiales, la funcion es solo enviarlo al servidor
socket.emit('enviarMensaje', {
    //usuario: 'Larry',
    mesaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp); // funcion que se ejecuta para saber que si se envio
});

// Escuchar informacion que envia el servidor al cliente
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})