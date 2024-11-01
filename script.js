/* TO DO:

Al hacer clic en “Agregar al Carrito”, el producto debe añadirse a una lista que representa el carrito de compras.
El carrito debe mostrar el nombre, cantidad, precio unitario, y precio total por producto.
Debe incluir opciones para aumentar o disminuir la cantidad de un producto y eliminar productos del carrito.

El carrito debe mostrar el total de la compra, actualizado automáticamente al modificar el carrito.

El carrito de compras debe poder mostrarse y ocultarse mediante un botón o icono.
Debe mostrarse un mensaje o alerta cuando se intente proceder a la compra con un carrito vacío.
*/

let $container = document.querySelector(".contProducts")

// recorremos el array de productos para imprimir cada píldora:

for(let product of productos){
    let $pill = document.createElement("div");
    $pill.classList.add("contPill")

    let $title = document.createElement("h3");
    $title.textContent = product.nombre;
    $pill.appendChild($title);

    let $img = document.createElement("img");
    $img.classList.add("imgFormat");
    $img.src = product.imagen;
    $pill.appendChild($img);

    let $description = document.createElement("p");
    $description.textContent = product.descripcion;
    $pill.appendChild($description);

    let $price = document.createElement("p");
    $price.textContent = product.precio + " €";
    $pill.appendChild($price);

    // la propiedad stock no la añado el el pill porque la utilizaré para hacer condicionales después

    let $btnAddToBasket = document.createElement("button")
    $btnAddToBasket.textContent = "Agregar al carrito";
    $pill.appendChild($btnAddToBasket);

    $container.appendChild($pill);
}

// -crear un objeto con los productos del carrito
// -crear un evento click que llame a una funcion por la que se añade el producto al carrito, si ya está dentro sumar otra unidad


// creamos la función para que el carrito se muestre u oculte al hacer click:

let $toggleCartButton = document.querySelector("#toggleCartButton");
$toggleCartButton.addEventListener("click", toggleCart);

function toggleCart(){
    let $shoppingCart = document.querySelector(".shoppingCart");
    $shoppingCart.classList.toggle("hidden");
    // toggle quiere decir que si esa clase está la quita, y si no la añade

}
