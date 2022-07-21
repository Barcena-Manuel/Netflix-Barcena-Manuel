let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormluario);

function validarFormluario(e){
    e.preventDefault();
    if(e.target.children[0].value.includes("-") && e.target.children[0].value.includes(".")){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tus datos fueron refistrados";
        mensaje.className = "verde";
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "no es un correo";
        mensaje.className = "rojo";
        document.body.append(mensaje);
        e.target.children[0].value = "";
    }
}