// Varibles del carrito
const MI_LISTA = document.querySelector();
const CONTENEDOR = document.querySelector();
const VACIAR = document.querySelector();
const LISTA = document.querySelector();
let pelisLista = [];
// Local Storage del carrito
const GUARDAR_PRODUCTOS = [];

registrarEventListeners();
function registrarEventListeners(){
    // Agregar peliculas usando "Agregar"
    LISTA.addEventListener("click", agregarPelicula);
    // Eliminar peliculas
    MI_LISTA.addEventListener("click", eliminarPelicula);
    // Vaciar lista
    VACIAR.addEventListener("click", () => {
        pelisLista = [];
        limpiarHTML();
    })
};

// Funciones
function agregarPelicula(e) {
    if(e.target.classList.contains("agregar mi lista")){
        const PELICULAS_SELECCIONADA = e.target.parentElement;
        leerProductos(PELICULAS_SELECCIONADA)
    }
};

