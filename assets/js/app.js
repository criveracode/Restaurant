const menu = [
    { id: 1, nombre: "Hamburguesa", categoria: "Comida", precio: 800 },
    { id: 2, nombre: "Pizza", categoria: "Comida", precio: 1200 },
    { id: 3, nombre: "Ensalada César", categoria: "Comida", precio: 700 },
    { id: 4, nombre: "Coca Cola", categoria: "Bebida", precio: 250 },
    { id: 5, nombre: "Café", categoria: "Bebida", precio: 180 },
    { id: 6, nombre: "Pastel de Chocolate", categoria: "Postre", precio: 500 }
];

// Obtener todos los platos
const indexMenu = () => {
    menu.forEach(plato => {
        console.log(`${plato.id}) ${plato.nombre} - $${plato.precio}`);
    });
}

indexMenu();


// Pedir platos
const showMenu = () => {

}








// const showMenu = () => {
//     let pedido = [];
//     let total = 0;

//     while (true) {
//         let eleccion = prompt(`Menú:\n${menu.map(item => `${item.nombre} - $${item.precio}`).join("\n")}\n\nEscribe el nombre del producto o "fin" para terminar:`);

//         if (eleccion.toLowerCase() === "fin") break;

//         let producto = menu.find(item => item.nombre.toLowerCase() === eleccion.toLowerCase());

//         if (producto) {
//             pedido.push(producto);
//             total += producto.precio;
//             alert(`${producto.nombre} agregado. Total: $${total.toFixed(2)}`);
//         } else {
//             alert("Producto no encontrado. Inténtalo de nuevo.");
//         }
//     }

//     if (pedido.length > 0) {
//         alert(`Tu pedido:\n${pedido.map(item => `${item.nombre} - $${item.precio}`).join("\n")}\nTotal a pagar: $${total.toFixed(2)}`);
//     } else {
//         alert("No realizaste ningún pedido.");
//     }
// }

// showMenu();