let $container = document.querySelector(".contProducts")

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