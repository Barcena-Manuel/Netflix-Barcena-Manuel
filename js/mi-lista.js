
class Carrito{

    //Añadir producto al carrito
    comprarProducto(e){
        e.preventDefault();
        //Delegado para agregar al carrito
        if(e.target.classList.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto(producto)
        }
    }

    //Leer datos del producto
    leerDatosProducto(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });

        if(productosLS === infoProducto.id){
            Swal.fire({
                type: 'info',
                title: 'Oops...',
                text: 'El producto ya está agregado',
                timer: 1000
            })
        }
        else {
            this.insertarCarrito(infoProducto);
        }
        
    }

    //Muestra producto seleccionado en carrito
    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>
                <a href="" class="resumen agregar-carrito nav-link header__hijo" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }

    //Eliminar el producto del carrito en el DOM
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains("borrar-producto")){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector("a").getAttribute("data-id");
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    //Elimina todos los productos
    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild)
        }
        this.vaciarLocalStorage();
        return false;
    }

    //Almacenar en el LS
    guardarProductosLocalStorage(producto){
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    //Comprobar que hay elementos en el LS
    obtenerProductosLocalStorage(){
        let productoLS;

        //Comprobar si hay algo en LS
        if(localStorage.getItem("productos") === null){
            productoLS = [];
        }else{
            productoLS = JSON.parse(localStorage.getItem("productos"));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(){
        let productoLs;
        productoLs = this.obtenerProductosLocalStorage();
        productoLs.forEach(function(productoLs, index){
            if(productoLs.id === productoID){
                productoLs.splice(index, 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productoLs));
    }

    //Mostrar los productos guardados en el LS
    leerLocalStorage(){
        let productoLs;
        productoLs = this.obtenerProductosLocalStorage();
        productoLs.forEach(function(producto){
            //Construir plantilla
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>
                    <a href="" class="resumen agregar-carrito nav-link header__hijo" data-id="${producto.id}"></a>
                </td>
                `;
                listaProductos.appendChild(row);
        });
    }
    //Eliminar todos los datos del LS
    vaciarLocalStorage(){
        localStorage.clear();
    }
};


