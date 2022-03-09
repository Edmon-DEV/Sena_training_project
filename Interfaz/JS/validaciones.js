function login() {
    console.log("Secion detenida");

    var usuario = document.getElementById('usuario').Value;
    var contraseña = document.getElementById('password').value;

    if (usuario === '' || usuario === null) {
        alert('No ha ingresado su usuario');
        return false;
    } else if (contraseña === '' || contraseña === null) {
        alert("No ha ingresado su contraseña");
        return false;
    }
    alert("Bienvenido");
    return true;

}


function recuperar() {
    console.log("Recuperacion Detenida");

    var documento = document.getElementById('documento').value;
    var tipo = document.getElementById('tipo').value;

    if (documento === '' || documento === null) {
        alert("No ha ingresado su Numero de Documento");
        return false;
    } else if (isNaN(documento)) {
        alert("El dato ingresado no pertenece a un documento");
        return false;
    } else if (documento.length > 11) {
        alert("El documento supera la longitud permitida");
        return false;
    } else if (tipo == 0) {
        alert("No ha selecionado el tipo de documento");
        return false;
    }
    alert("se ha enviado una contraseña a su correo establecido");
    return true;
}