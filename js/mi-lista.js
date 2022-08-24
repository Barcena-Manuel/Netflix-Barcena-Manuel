
class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto)
        }
    }

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
                productoLs.splice(index, 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productoLs));
    }

    leerLocalStorage(){
        let productoLs;
        productoLs = this.obtenerProductosLocalStorage();
        productoLs.forEach(function(producto){
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


