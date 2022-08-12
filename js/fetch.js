
const lista = document.getElementById("listado");

fetch("https://run.mocky.io/v3/742b5954-968d-44d7-9b74-ac4d19832487")
.then(response => response.json())
.then(productos => {
    productos.forEach(producto => {
    const li = document.createElement("div");
    li.innerHTML = `
        <div class="tarjeta__div">
        <img class="main__imagenes main__imagen" src="${producto.imagen}" alt="top 1">
        </div>
    `;

    lista.append(li);
    });
});
