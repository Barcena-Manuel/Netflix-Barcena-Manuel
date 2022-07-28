
let usuario;
let usuarioStorage = sessionStorage.getItem("Usuario");

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormluario)

function validarFormluario(e){
    e.preventDefault();
    if(usuarioStorage(e.target.children[0].value.includes("-") && e.target.children[0].value.includes("."))){
        let mensaje = document.createElement("div");
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        document.body.append(mensaje);
        e.target.children[0].value = "";
    }
}

if(usuarioStorage){
    let usuario = usuarioStorage;
    let mensaje = `Bienvenido/a ${usuario}`;
    alert(mensaje)
}else{
    usuario = prompt("Inicie secion");
    sessionStorage.setItem("usuario", usuario);
}

let boton = document.createElement("container");
boton.innerHTML = "<button>Cerrar secion</button>"
padre.append(botonPadre)

boton.addEventListener("click", () => console.log(sessionStorage));






