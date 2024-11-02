
let $container = document.querySelector(".contProducts")

// recorremos el array de productos para imprimir cada píldora:

for(let product of productos){
    let $pill = document.createElement("div");
    $pill.classList.add("contPill");
    $pill.dataset.id = product.id;
    $pill.dataset.title = product.nombre;
    $pill.dataset.price = product.precio;
    $pill.dataset.stock = product.stock;
    // dataset es la información de cada píldora que me interesará utilizar luego

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

    // la propiedad stock no la añado al pill porque la utilizaré para hacer condicionales después

    let $btnAddToCart = document.createElement("button")
    $btnAddToCart.textContent = "Agregar al carrito";
    $pill.appendChild($btnAddToCart);
    $btnAddToCart.addEventListener("click", addToCart);

    $container.appendChild($pill);
}

// creamos la función para que el carrito se muestre u oculte al hacer click:

let $toggleCartButton = document.querySelector("#toggleCartButton");
$toggleCartButton.addEventListener("click", toggleCart);

function toggleCart(){
    let $shoppingCart = document.querySelector(".shoppingCart");
    $shoppingCart.classList.toggle("hidden");
    // toggle quiere decir que si esa clase está la quita, y si no la añade
}

// creamos el objeto del carrito y la función que aparece en el evento del botón para añadir producto a carrito

let productsInsideCart = {};

function addToCart(){
    let $pill = this.closest(".contPill");
    // hay que definir aquí la píldora porque no está dentro del scope

    let id = $pill.dataset.id;
    let title = $pill.dataset.title;
    let price = $pill.dataset.price;
    let stock = $pill.dataset.stock;

    if (!productsInsideCart.hasOwnProperty(id)){
        // si no existe lo añadimos con el condicional (lo inializamos a 0 y luego con la función modifyCartItemCount se suma uno):
        productsInsideCart[id] = {
            id: parseInt(id), //parse porque estos valores estaban guardados como string y no como num
            title: title,
            price: parseInt(price),
            count: 0,
            stock: parseInt(stock)
        }
    }
    // y si ya existía simplemente se le añade uno más:
    // (así solo tengo que controlar el stock dentro de la función modifyCartItemCount)
    modifyCartItemCount(id, 1);
    refreshProductsInsideCart();

}

// creamos la función que refresca el carrito de forma visible (en el documento html) + muestra el precio total del carrito

function refreshProductsInsideCart() {
    let $listCart = document.querySelector(".listCart");
    $listCart.innerHTML = "";
    // de esta forma borro el contenido que hubiera en el carrito previamente a construirlo

    let totalPrice = 0;
    for (let productId in productsInsideCart){
        let product = productsInsideCart[productId];
        let $tr = document.createElement("tr");
        $tr.dataset.id = product.id;
        $tr.innerHTML = `
        <td>${product.title}</td>
        <td>${product.price}€</td>
        <td><button class="removeItem fa-solid fa-minus"></button></td>
        <td>${product.count}</td>
        <td><button class="addItem fa-solid fa-plus"></button></td>
        <td>${product.count * product.price}€</td>
        `;

        let $addBtn = $tr.querySelector(".addItem");
        $addBtn.addEventListener("click", modifyCartAddItem);

        let $removeBtn = $tr.querySelector(".removeItem");
        $removeBtn.addEventListener("click", modifyCartRemoveItem);
        
        $listCart.appendChild($tr);

        totalPrice += product.count * product.price
    }

    let $totalPrice = document.querySelector("#totalPrice");
    $totalPrice.textContent = totalPrice + " €";
}

// creamos las funciones de los eventos de los botones +/- del carrito

function modifyCartAddItem(){
    let $row = this.closest("tr");
    let productId = parseInt($row.dataset.id);
    modifyCartItemCount(productId, 1);
}

function modifyCartRemoveItem(){
    let $row = this.closest("tr");
    let productId = parseInt($row.dataset.id);
    modifyCartItemCount(productId, -1);
}

function modifyCartItemCount(productId, change){
    if (!productsInsideCart.hasOwnProperty(productId)){
        console.error("The product is not inside the shopping Cart");
    }
    // esto creo que no hace falta porque ha dicho que es un mensaje para el programador que el día de mañana utilice la función noseque (1:00:00)

    if (productsInsideCart[productId].count + change > productsInsideCart[productId].stock){
        alert("Lo sentimos, estamos temporalmente fuera de stock");
    } else {
        productsInsideCart[productId].count += change;
        if (productsInsideCart[productId].count <= 0){
            delete productsInsideCart[productId];
        }
        // esto hace que cuando la cantidad del producto sea 0 (o menor) se borre del carrito    
    }

    refreshProductsInsideCart();
}

// añadimos un evento y función para el mensaje cuando quieres finalizar con carrito vacíon

let $checkoutBtn = document.querySelector(".checkoutBtn")
$checkoutBtn.addEventListener("click", checkoutNotPossible);

function checkoutNotPossible() {
    if(Object.keys(productsInsideCart).length === 0){
        alert("Por favor añade productos al carrito para proceder con la compra")
    } else {
        alert("Gracias por su compra :)")
        productsInsideCart = {};
        refreshProductsInsideCart();
    }
} 