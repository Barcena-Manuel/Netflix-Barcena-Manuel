
class Carrito{
    comprarProducto(e){
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
            id : producto.querySelector("a").getAttribute("data-id"),
            cantidad:1
        }
        let prodcutosLS;
        prodcutosLS = this.obtenerProductosLocalStorage();
        prodcutosLS.forEach(function(prodcutosLS){
            if(prodcutosLS.id === infoProducto.id){
                prodcutosLS = prodcutosLS.id
            }
        });
        if(prodcutosLS === infoProducto.id){
            Swal.fire('Ya esta en tu lista')
        }else{
            this.insetarCarrito(infoProducto);
        }
        this.insetarCarrito(infoProducto);
    }
    insetarCarrito(producto){
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
        this.guardarProductosLocalStorage(producto);
    }

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

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild)
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;

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
                productosLs.splice(index, 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(prodcutosLS));
    }

    leerLocalStorage(){
        let prodcutosLS;
        prodcutosLS = this.obtenerProductosLocalStorage();
        prodcutosLS.forEach(function(producto){
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

    vaciarLocalStorage(){
        localStorage.clear();
    }
};


