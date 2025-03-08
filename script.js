// SELECCIÓN DE CONTENEDOR DONDE VAN A IR LAS PÍLDORAS

let $container = document.querySelector(".cont-products")

// BUCLE DEL OBJETO CON LOS PRODUCTOS PARA IMPRIMIRLOS DINÁMICAMENTE EN EL HTML

for(let product of productos){
    let $pill = document.createElement("div");
    $pill.classList.add("cont-pill");
    $pill.dataset.id = product.id;
    $pill.dataset.title = product.nombre;
    $pill.dataset.price = product.precio;
    $pill.dataset.stock = product.stock;

    let $title = document.createElement("h3");
    $title.textContent = product.nombre;
    $pill.appendChild($title);

    let $img = document.createElement("img");
    $img.classList.add("img-format");
    $img.src = product.imagen;
    $pill.appendChild($img);

    let $description = document.createElement("p");
    $description.textContent = product.descripcion;
    $pill.appendChild($description);

    let $price = document.createElement("h3");
    $price.textContent = "Precio: " + product.precio + " €";
    $pill.appendChild($price);

    let $btnAddToCart = document.createElement("button")
    $btnAddToCart.classList.add("btn-addtocart")
    $btnAddToCart.textContent = "Agregar al carrito";
    $pill.appendChild($btnAddToCart);
    $btnAddToCart.addEventListener("click", addToCart);

    $container.appendChild($pill);
}

// FUNCIÓN PARA QUE EL CARRITO SE MUESTRE/OCULTE AL HACER CLICK EN EL ICONO

let $btnToggleCart = document.querySelector("#btnToggleCart");
$btnToggleCart.addEventListener("click", toggleCart);

function toggleCart(){
    let $contShoppingCart = document.querySelector(".cont-shoppingcart");
    $contShoppingCart.classList.toggle("hide");
}

// FUNCIÓN PARA AÑADIR LOS PRODUCTOS SELECCIONADOS AL CARRITO

let productsInsideCart = {}; // objeto que guarda los productos del carrito ("lista de la compra")

function addToCart(){
    let $pill = this.closest(".cont-pill");

    let id = $pill.dataset.id;
    let title = $pill.dataset.title;
    let price = $pill.dataset.price;
    let stock = $pill.dataset.stock;

    if (!productsInsideCart.hasOwnProperty(id)){
        // si no existe lo añadimos (se inicializa a 0 y en el siguiente paso se suma uno):
        productsInsideCart[id] = {
            id: parseInt(id),
            title: title,
            price: parseInt(price),
            count: 0,
            stock: parseInt(stock)
        }
    }
    // si ya existía simplemente se le añade uno más:
    modifyCartItemCount(id, 1);
    updateProductsInsideCart();

}

// FUNCIÓN QUE ACTUALIZA LAS FILAS DEL CARRITO Y MUESTRA EL PRECIO TOTAL

function updateProductsInsideCart() {
    let $listCart = document.querySelector(".listCart");
    $listCart.innerHTML = "";
    // se borra el contenido que hubiera en el carrito previamente

    let totalPrice = 0;
    for (let productId in productsInsideCart){
        let product = productsInsideCart[productId];
        let $tr = document.createElement("tr");
        $tr.dataset.id = product.id;
        $tr.classList.add("row-format")
        $tr.innerHTML = `
        <td class="cell-format"><h4>${product.title}</h4></td>
        <td class="cell-format"><h4>${product.price}€</h4></td>
        <td class="cell-format"><h4><button class="removeItem fa-solid fa-minus"></button></h4></td>
        <td class="cell-format"><h4>${product.count}</h4></td>
        <td class="cell-format"><h4><button class="addItem fa-solid fa-plus"></button></h4></td>
        <td class="cell-format"><h4>${product.count * product.price}€</h4></td>
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

// FUNCIONES DE LOS BOTONES -/+ DEL CARRITO

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

// FUNCIÓN DE CONTROL DE STOCK

function modifyCartItemCount(productId, change){
    if (productsInsideCart[productId].count + change > productsInsideCart[productId].stock){
        alert("Lo sentimos, en este momento no disponemos de más stock");
        // si el count es mayor al stock no se puede seguir sumando unidades
    } else {
        productsInsideCart[productId].count += change;
        if (productsInsideCart[productId].count <= 0){
            delete productsInsideCart[productId];
        }
        // si la cantidad del producto es 0 (o menor) se borra del carrito    
    }

    updateProductsInsideCart();
}

// FUNCIÓN QUE MUESTRA LOS MENSAJES AL PROCEDER CON LA COMPRA (TANTO CON CARRITO VACÍO O LLENO)

let $btnCheckout = document.querySelector(".btn-checkout")
$btnCheckout.classList.add("btn-checkout");
$btnCheckout.addEventListener("click", checkIfPurchaseIsPossible);

function checkIfPurchaseIsPossible() {
    if(Object.keys(productsInsideCart).length === 0){
        alert("Por favor añada productos al carrito para proceder con la compra")
    } else {
        alert("Gracias por su compra")
        productsInsideCart = {};
        updateProductsInsideCart();
    }
} 