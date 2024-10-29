# simulador_tienda
práctica entregable del módulo de Javascript

Descripción del Ejercicio:

Listado de Productos Inicial:

Los productos disponibles en la tienda deben ser definidos en un archivo separado llamado data.js.
En data.js, crea un array de objetos que represente los productos, con propiedades como id, nombre, imagen, descripcion, precio, y stock.
Este archivo data.js debe ser incluido en el HTML inicial, cargando los productos de manera dinámica en la tienda al cargar la página.
Ejemplo de data.js:
 

const productos = [
  { id: 1, nombre: "Hamburguesa Clásica", imagen: "img/hamburguesa.jpg", descripcion: "Deliciosa hamburguesa con ingredientes frescos.", precio: 10, stock: 20 },
  { id: 2, nombre: "Patatas Fritas", imagen: "img/patatas.jpg", descripcion: "Crujientes patatas fritas con sal.", precio: 5, stock: 50 },
  // Más productos...
];
 

Estructura de la Tienda:

Los productos del array deben ser mostrados dinámicamente en la página utilizando JavaScript.
Cada producto debe tener un botón “Agregar al Carrito” que permita al usuario añadir el producto seleccionado.
Herramientas sugeridas:
Utiliza <div>, <img>, <h3>, <p>, y <button> para la estructura de cada producto.
Usa JavaScript para recorrer el array productos y generar dinámicamente los elementos HTML correspondientes.
 

Carrito de Compras:

Al hacer clic en “Agregar al Carrito”, el producto debe añadirse a una lista que representa el carrito de compras.
El carrito debe mostrar el nombre, cantidad, precio unitario, y precio total por producto.
Debe incluir opciones para aumentar o disminuir la cantidad de un producto y eliminar productos del carrito.
Herramientas sugeridas:
Utiliza JavaScript para manipular el DOM y actualizar la visualización del carrito de acuerdo a las acciones del usuario.
Gestiona los productos del carrito mediante un array u objeto en JavaScript.
 

Cálculo del Total:

El carrito debe mostrar el total de la compra, actualizado automáticamente al modificar el carrito.
Herramientas sugeridas:
Utiliza JavaScript para calcular el total de la compra, actualizando los valores cada vez que se modifique el contenido del carrito.
 

Interacción con el Usuario:

El carrito de compras debe poder mostrarse y ocultarse mediante un botón o icono.
Debe mostrarse un mensaje o alerta cuando se intente proceder a la compra con un carrito vacío.
Herramientas sugeridas:
Manejo de eventos de clic para abrir/cerrar el carrito y para las interacciones con los productos dentro de él.
 

Validaciones:

Implementar validaciones para controlar el stock de productos y evitar cantidades negativas.
Herramientas sugeridas:
Uso de condicionales en JavaScript para asegurar que los productos no se agreguen más allá del stock disponible.
 

Diseño y Estilo:

La tienda y el carrito deben tener un diseño atractivo y una buena experiencia de usuario.
Herramientas sugeridas:
Utilizar CSS para diseñar la cuadrícula de productos, el carrito, y los estilos de los botones.
 

Entregables:

index.html con la estructura básica de la tienda y la inclusión del archivo data.js.
data.js con la lista inicial de productos en un array.
Archivo CSS para los estilos visuales de la tienda y el carrito.
Archivo JavaScript con la lógica del carrito, la manipulación del DOM y las interacciones del usuario.
Notas Adicionales:

Todo el código JavaScript debe estar bien comentado y estructurado para facilitar la comprensión y revisión.
No se permite el uso de librerías o frameworks.