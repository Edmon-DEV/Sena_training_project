function validar() {

    console.log('Envío detenido');


    var Documento = document.getElementById("Documento").value;
    var Tipo = document.getElementById("id").value;
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Email = document.getElementById("Email").value;
    var Telefono = document.getElementById("Telefono").value;
    var Contraseña = document.getElementById("password").value;
    var ConfirmarContraseña = document.getElementById("Password").value;
    var Genero = document.getElementById("Genero").value;
    var Edad = document.getElementById("Edad").value;
    var FechaNacimiento = document.getElementById("FechaNacimiento").value;
    var Direccion = document.getElementById("Direccion").value;


    if (Documento === '' || Documento === null) {

        alert("No ha sido ingresado el número de documento del usurio.");
        return false;

    } else if (isNaN(Documento)) {

        alert("El dato ingresado no corresponde a un número de documento de identidad.");
        return false;

    } else if (Documento.length > 11) {

        alert('El dato supera la longitud máxima de 10 digitos.');
        return false;

    } else if (Tipo == 0) {
        alert('No ha sido ingresado el tipo de documento');
        return false;

    } else if (Nombre === '' || Nombre === null) {

        alert("No ha sido ingresado el nombre del usuario.");
        return false;

    } else if (Nombre.length > 30) {

        alert('El dato nombre supera la longitud máxima permitida, 30 caracteres.');
        return false;

    } else if (Apellido === '' || Apellido === null) {

        alert("No ha sido ingresado los apellidos del usuario.");
        return false;

    } else if (Apellido.length > 30) {

        alert('El dato apellido supera la longitud máxima permitida, 30 caracteres.');
        return false;

    } else if (Email === '' || Email === null) {

        alert("No ha sido ingresado la dirección de correo del usuario.");
        return false;

    } else if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(Email))) {

        alert("La dirección de correo electrónica no es valida.");
        return false;

    } else if (Telefono === '' || Telefono === null) {

        alert("No ha sido ingresado el número telefónico del usuario.");
        return false;

    } else if (!(/^\d{10}$/.test(Telefono))) {

        alert("El número de celular debe ser de 10 digitos.");
        return false;

    } else if (Contraseña === '' || Contraseña === null) {

        alert("No ha sido ingresado la contraseña.");
        return false;

    } else if (ConfirmarContraseña === '' || ConfirmarContraseña === null) {

        alert("No ha sido ingresado la Confirmacion de contraseña.");
        return false;

    } else if (Genero == 0) {

        alert("No ha seleccionado el sexo del usuario.");
        return false;

    } else if (Edad == '' || Edad == null) {

        alert("No ha ingresado la Edad.");
        return false;

    } else if (FechaNacimiento === '' || FechaNacimiento === null) {

        alert("No ha sido ingresado la fecha de nacimiento.");
        return false;


    } else if (Direccion === '' || Direccion === null) {

        alert("No ha sido ingresado la dirección de residencia.");
        return false;
    }

}