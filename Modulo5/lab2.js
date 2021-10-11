const carrito = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true
  }, {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true
  }, {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false
  }, {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false
  } ];

// 1. Mostrar el carrito de la compra listando todos los productos.
for (producto of carrito) {
    imprimir(producto);
    }

function imprimir(producto) {
    console.log("--------------------");
    for (propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
    }
}

// // 2. Eliminar el producto con id 54657 del carrito de la compra.
// let indice;

// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].id == 54657) {
//         indice = i;
//     };
// }

// carrito.splice(indice, 1);

// for (producto of carrito) {
//     imprimir(producto);
// }

// function imprimir(producto) {
//     console.log("--------------------");
//     for (propiedad in producto) {
//     console.log(propiedad + ": " + producto[propiedad]);
//     }
// }

// // 3. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
// let total = 0;

// for (producto of carrito) {
//     total += producto.price * producto.count;
// }

// console.log("Total: " + total + "€");

// // 4. Filtrar por los productos que sean prime.
// var productosPremium = [];

// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].premium == true) {
//         productosPremium.push(carrito[i]);
//     }
// }

// console.log(productosPremium);

// //OPCIONAL:
// // 5. Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".

//         let premium = true;
    
//         for (producto of carrito) {
//             if (producto.premium === false){
//                 premium = false;
//             }
//         }

//         if (premium === true) {
//             console.log("Gastos de envió cero");
//         } else{
//                 console.log("Con gastos de envío");
//             }
    
// 6. Mostrar el carrito en un listado de html básico.
// let total = 0;

// for (producto of carrito) {
//     total += producto.price * producto.count;
// }   

// document.write("<h3>Carrito de la compra</h3>")

// for (producto of carrito) {
//     document.write("<ul>");
//     document.write("<li>" + producto.name + "</li>" + "<p>" + producto.price + " x " + producto.count + "</p>");
//     document.write("</ul>");    
// }

// document.write("<p>--------------------------------------------------------</p>");
// document.write("<h3>Total: " + total + "</h3>");

// 7. Aplicar un descuento del 5% si la compra es mayor de 100 €.
// let totalParaDescuento = 0;

// for (producto of carrito) {
//     totalParaDescuento += producto.price * producto.count;
// }

// if (totalParaDescuento > 50) {
//     console.log("Total con descuento:" + (totalParaDescuento * 0.95));
// }