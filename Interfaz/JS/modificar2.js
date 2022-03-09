function validar() {

    console.log('Envío detenido');

    var documento = document.getElementById("documento").value;
    var tipo = document.getElementById("tipo").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var genero = document.getElementById("genero").value;
    var rh = document.getElementById("rh").value;
    var password = document.getElementById("password").value;
    var conPassword = document.getElementById("conPassword").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var eps = document.getElementById("eps").value;
    var direccion = document.getElementById("direccion").value;


    if (documento === '' || documento === null) {

        alert("No ha sido ingresado el número de documento.");
        return false;

    } else if (isNaN(documento)) {

        alert("El dato ingresado no corresponde a un número de documento de identidad.");
        return false;

    } else if (documento.length > 15) {

        alert('El dato supera la longitud máxima de 15 digitos.');
        return false;

    }
    if (tipo == 0) {

        alert("No ha seleccionado el Tipo de documento.");
        return false;

    }
    if (nombres === '' || nombres === null) {

        alert("No ha sido ingresado su nombre.");
        return false;

    } else if (nombres.length > 30) {

        alert('El dato nombre supera la longitud máxima permitida, 30 caracteres.');
        return false;

    }
    if (apellidos === '' || apellidos === null) {

        alert("No ha sido ingresado sus apellidos.");
        return false;

    } else if (apellidos.length > 30) {

        alert('El dato apellido supera la longitud máxima permitida, 30 caracteres.');
        return false;

    }
    if (telefono === '' || telefono === null) {

        alert("No ha sido ingresado su número telefónico o celular.");
        return false;

    }
    if (email === '' || email === null) {

        alert("No ha sido ingresado su dirección de correo electronico.");
        return false;


    }
    if (genero == 0) {

        alert("No ha seleccionado el sexo.");
        return false;

    }
    if (rh == 0) {

        alert("No ha seleccionado el RH del paciente.");
        return false;

    }
    if (password === '' || password === null) {

        alert("No ha ingresado una contraseña.");
        return false;

    } else if (password.length > 10) {

        alert('El dato nombre supera la longitud máxima permitida, 10 caracteres.');
        return false;

    }
    if (conPassword === '' || conPassword === null) {

        alert("No ha ingresado la confirmacion de la contraseña.");
        return false;

    } else if (conPassword.length > 30) {

        alert('El dato supera la longitud máxima permitida, 10 caracteres.');
        return false;

    }
    if (nacimiento === '' || nacimiento === null) {

        alert("No ha sido ingresado su fecha de nacimiento.");
        return false;

    }
    if (eps === '' || eps === null) {

        alert("No ha sido ingresado el nombre de su EPS.");
        return false;

    }
    if (direccion === '' || direccion === null) {

        alert("No ha sido ingresado su direccion.");
        return false;

    } else if (direccion.length > 30) {

        alert('La direciom supera la longitud máxima permitida, 30 caracteres.');
        return false;

    }
}