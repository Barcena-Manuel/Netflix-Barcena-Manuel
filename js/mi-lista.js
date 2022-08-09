
class Carrito{
    agregarProductos(e){
        e.preventDefault();
        if(e.target.classList.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosPelicula(producto)
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h4"),textContent,
        }
    }
};


