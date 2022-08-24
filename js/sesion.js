// Varialbles de loging
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormluario);

let boton = document.getElementById("sesion");
boton.addEventListener("click", cerrarSesion);

// Funciones del loging y del boton para cerrar sesion
function validarFormluario(e){
    // Nombre
    miName = document.getElementById("name");
    sessionStorage.setItem("usuario", miName.value);
    // Edad
    miEdad = document.getElementById("number");
    sessionStorage.setItem("number", miEdad.value);
    // Email
    miEmail = document.getElementById("email");
    sessionStorage.setItem("email", miEmail.value);
    // Contraseña
    miContraseña = document.getElementById("password");
    sessionStorage.setItem("password", miContraseña.value);
    e.preventDefault();
};

// Alerta
function cerrarSesion(e){
    if(sessionStorage.getItem("name"),
    sessionStorage.getItem("number"),
    sessionStorage.getItem("email"),
    sessionStorage.getItem("password")){
        sessionStorage.clear(e)   
        Swal.fire({
            icon: 'success',
            title: 'Cerrar sesion',
            text: 'Has cerrado tu sesion con exito!',
            })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenes ninguna sesion inicia',
        })
    }
};




