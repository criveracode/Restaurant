
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


// Elegir plato
const showMenu = () => {
    let pedido = [];
    let total = 0;

    while (true) {
        let eleccion = prompt(`Menú:\n${menu.map(item => `${item.id}) ${item.nombre} - $${item.precio}`).join("\n")}\n\nIngresa el número del producto o "0" para finalizar:`);

        let idElegido = Number(eleccion);

        if (idElegido === 0) break; // Salir si el usuario ingresa 0

        if (isNaN(idElegido) || !menu.some(item => item.id === idElegido)) {
            alert("Opción no válida. Ingresa un número de la lista.");
            continue;
        }

        let producto = menu.find(item => item.id === idElegido);
        pedido.push(producto);
        total += producto.precio;
        alert(`${producto.nombre} agregado. Total: $${total.toFixed(2)}`);
    }

    if (pedido.length > 0) {
        alert(`Tu pedido:\n${pedido.map(item => `${item.nombre} - $${item.precio}`).join("\n")}\n\nTotal a pagar: $${total.toFixed(2)}`);
    } else {
        alert("No realizaste ningún pedido.");
    }
};
showMenu();