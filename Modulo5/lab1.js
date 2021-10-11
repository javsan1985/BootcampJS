const bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false, suceeded: true},
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false, suceeded: true},
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true, suceeded: false},
    { id: 4, price: 37.50, count: 2, room: "standard", prepaid: true, suceeded: true},
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true, suceeded: false},
];


let repetido = false;

for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];

    for (x = i + 1; x < bookings.length; x++) {
        const reserva2 = bookings[x];
        repetido = repetido || reserva1.id === reserva2.id;
    }
}

console.log("Hay identificadores repetidos: " + repetido);

//IMPRIMIR PREPAGADAS CON ERROR 
// for (reserva of bookings) {
//     if (reserva.prepaid && !reserva.suceeded) {
//         imprimir(reserva);
//     }
// }

// function imprimir(reserva) {
//     console.log("--------------------");
//     for (propiedad in reserva) {
//         console.log(propiedad + ": " + reserva[propiedad]);
//     }
// } 

// APLICAR DESCUENTO A TODAS LAS RESERVAS
// for (reserva of bookings) {
//     reserva.price = reserva.price * 0.9;
//     imprimir(reserva);
// }

// function imprimir(reserva) {
//     console.log("--------------------");
//     for (propiedad in reserva) {
//         console.log(propiedad + ": " + reserva[propiedad]);
//     }
// } 

// let total = 0;

// for (reserva of bookings) {
//     total += reserva.price * reserva.count;
// }

// console.log("Total: " + total);


// for (reserva of bookings) {
//     if (reserva.prepaid) imprimir(reserva);
// }

// function imprimir(reserva) {
//     console.log("--------------------");
//     for (Attr in reserva) {
//     console.log(Attr.toUpperCase() + ": " + reserva[Attr]);
//     }
// }

// EXISTE ERROR EN ALGUNA RESERVA
// function existeError() {
//     let succeeded = true;

//     for (reserva of bookings) {
//         succeeded = succeeded && reserva.succeeded;
//     }
//     return !succeeded;
// }

// console.log("Existe reserva con error: " + existeError());


//IMPRIMIR TODAS LAS RESERVAS
// for (reserva of bookings) {
//     imprimir(reserva);
// }

// function imprimir(reserva) {
//     console.log("--------------------");
//     for (propiedad in reserva) {
//         console.log(propiedad + ": " + reserva[propiedad]);
//     }
// }