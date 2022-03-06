

// probando las funciones

agregarProductoAlCarrito("gorro ck", 300, 20, 50);
agregarProductoAlCarrito("gorro gucci", 300, 20, 18);
descuentoTarjeta(12000);
ayudaCliente();
devolverProductoALaTienda("gorros gucci", 2000, 4);
elementoAñadidoLista(3);


// esta funcion agrega productos al carrito considerando si tiene stock o no del producto

function agregarProductoAlCarrito(nombreProducto, precioProducto, stockProducto, cantidadPedida) {
    const tieneStock = validarStock(stockProducto, cantidadPedida);

    if (tieneStock) {
        console.log(`Agregaste a tu carrito ${cantidadPedida} ${nombreProducto} a $${precioProducto}.`)
    } else {
        console.log(`Por el momento no podemos ofrecerte ${nombreProducto}. No nos queda en stock. `)
    }
}

// esta funcion valida el stock en base a lo que se pide y el stock que hay del producto

function validarStock(stockProducto, cantidadPedida) {
    if (stockProducto > cantidadPedida) {
        return true;
    } else {
        return false;
    }

}

// esta funcion lleva al cliente con soporte si necesita ayuda en el e-Commerce

function ayudaCliente() {
    let quieroAyuda = prompt('Si necesitás ayuda marca 1');
    if (quieroAyuda == 1) {
        console.log('¿Qué inconveniente estas teniendo?');
    } else {
        console.log("te llevaremos al inicio nuevamente.");
    }
}

// esta funcion va a guardar en el carrito a medida que se van agregando productos

function elementoAñadidoLista(paresAgregados) {
    for (let i = 1; i <= paresAgregados; i++) {
        if (i < 2) {
            console.log(`agregaste ${i} gorro al carrito.`)
        } else {
            console.log(`agregaste ${i} gorros al carrito.`)
        }
    }
}

// esta funcion devuelve un producto del carrito

function devolverProductoALaTienda(nombreProducto, precioProducto, cantidadProducto) {
    console.log(`Devolviste ${cantidadProducto} ${nombreProducto} a la tienda.`);
}


// esta funcion le hace descuento al cliente si tiene tarjeta itaú
function descuentoTarjeta(pagoCliente, precioBonificado = 10000) {
    if (pagoCliente > precioBonificado) {
        console.log(`Tenes descuento del 15% por comprar mas de ${precioBonificado}.`);
    } else {
        console.log(`Aún no llegaste a los ${precioBonificado} para realizarte el descuento.`);
    }
}