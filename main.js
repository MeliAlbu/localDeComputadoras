var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"]  },
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};


var ada = {
    nombre: ada
}

ada.edad = 27


//   precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la 
//   máquina que se puede armar
//    con esos componentes, que es la suma de los precios de cada componente incluido.

function precioMaquina(componentes) {

    var numerosPrecios = 0

    for (var i = 0; i < componentes.length; i++) {
        for (var z = 0; z < local.precios.length; z++) {
            if (componentes[i] === local.precios[z].componente) {
                numerosPrecios += local.precios[z].precio
            }
        }
    }
    return numerosPrecios
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); // 320 ($200 del monitor + $120 del motherboard)
//primer paso - recorrer el array
//segundo paso - necesutamos que el primer componente coincida con el elemento del segundo array
// tercer paso - si coincide, sacar el precio
//cuarto paso - sumar ese precio
//----------------------------------------------------------------------------------------------
// componentes.map(function(item, i, array) {
//     console.log(item)
//     local.precios.map(function(itemDos, iDos, arrayDos){
//         console.log(itemDos.componente)
//     }
// }
// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, 
// o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que 
// está identificada por la variable ventas.

//el for grande recorre local.ventas ---- el segundo for recorre local.ventas[i].componentes 
// -------- dps comparo local.ventas[z] con componentes

function cantidadVentasComponente(componente) {

    var cantidadDeVentas = 0;
    for (var i = 0; i < local.ventas.length; i++) {

        // console.log(local.ventas[i])
        for (var z = 0; z < local.ventas[i].componentes.length; z++) {
            // console.log(local.ventas[i].componentes[z]);

            if (componente == local.ventas[i].componentes[z]) {

                cantidadDeVentas++

            }
        }
    } return cantidadDeVentas
}

// console.log(cantidadVentasComponente("Monitor ASC 543")); // 2




//VENDEDORA DEL MESSS----------------------------------------------------------------
// var diaDeHoy = new Date()

// console.log(diaDeHoy.getFullYear())



// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la
//  vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, 
// sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
// "Ada" (vendio por $670, una máquina de $320 y otra de $350)
//Sacar las ventas del mes que estamos buscando - encontrar que vendedoras vendieron - calcular cuanta plata vendio

// cada vendedora - comparar la que vendio mas - retonar

//recibo un numero y otro numero, 
// /recorrerlo con for,usar get day y get month para obtener mes y año, y usar if. --- if uso get day y get month
// y coinciden voy a 
// trabajar con Eso, sino quedo con las ultimas 4 ventas que me sirven

//filtro por nombre de vendedora -- si el nombre de vendedora es ada guardo los componentes y los guardo a la 
// funcion precio maquina, comparo que numero es mas grande,
//  si el de ada es mas grande retorno ada, si el de grace es mas grande retorno grace

//necesito no solo la vendedora que es nombreVendedora, sino el precio de todo lo que vendio, para eso esta
// la primera función
// EMPIEZO POR DECLARAR LA FUNCION Y LLEVAR A LOS DATOS QUE NECESITO QUE ES EL NOMBRE DE LA CHICA 
//Y SUS COMPONENTES


function vendedoraDelMes(mes, anio) {
    // SOLUCION MIA 


    //     for (var i = 0; i < local.ventas.length; i++) {

    //         var mesArray = local.ventas[i].fecha.getMonth();
    //         var anioArray = local.ventas[i].fecha.getYear();
    //         console.log(local.ventas[i].fecha.getMonth())
    //     }

    //     // } return local.vendedoras

    //     // for  (var z = 0; z < local.ventas.length; z++) {
    //     //     local.ventas[z].fecha.getYear() 
    //     //         // console.log(local.ventas[z].fecha.getYear())

    //     //     }

    //     if (mes == mesArray && anio == anioArray) {

    //         console.log(local.ventas[i].nombreVendedora)
    //     }
    //     // for (var i = 0; i < ventasFiltradas.length; i++) {
    //     //     ventasFiltradas[i].nombreVendedora === "Ada"

    //     // }}
    //     //guardamos ventas de Ada 
    // }



    // if (nombreVendedora == "Ada") {

    //     var nuevaVarParaGuardarcomponentes = 0;


    //     for (let i = 0; i < array.length; i++) {
    //         for (let i = 0; i < local.ventas[i].nombreVendedora.length; i++) {
    //             console.log(loca.ventas[i].nombreVendedora.length)

    //         } for (let i = 0; i < array.length; i++) {
    //             local.ventas[z].componentes.length;
    //             console.log(local.ventas[z].componentes.length)
    //         }




    //     }

    // }





    //SOLUCION DE CLASE
    var nuevaVarParaGuardarcomponentes = 0;
    var ventasAda = 0;
    var ventasGrace = 0;


    for (var i = 0; i < local.ventas.length; i++) {
        console.log(local.ventas[i].fecha.getMonth() + 1)
        console.log(mes)

        console.log(local.ventas[i].fecha.getFullYear())
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {

            console.log(precioMaquina(local.ventas[i].componentes))
        }


        if (local.ventas[i].nombreVendedora == "Ada") {

            console.log(precioMaquina(local.ventas[i].componentes))

            ventasAda = ventasAda + precioMaquina(local.ventas[i].componentes)
        }

        if (local.ventas[i].nombreVendedora == "Grace") {
            console.log(precioMaquina(local.ventas[i].componentes))
            ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes)
        }
    } if (ventasAda < ventasGrace) {
        console.log("Gano Ada con " + ventasAda)
        return 'Ada'
    }
    else if (ventasAda > ventasGrace) {
        console.log("gano grace con " + ventasGrace)
        return "grace"
    }
}




// pasarle a precio maquina localventasi componentes y devolver cada vendedora el precio de sus ventas
//termina con este console.log
console.log(vendedoraDelMes(1, 2019));

//ACA TERMINA VENDEDORADELMES ----------------------------------------------
//: Obtener las ventas de un mes.  
//recibo mes y anio con gets. Los precios de los componentes vendidos en ese mes los 
//guardo en ventasPorMes


function ventasMes(mes, anio) {
    var ventasDelMes = 0; //en esta variable quiero guardar el resultado de preciomaquina
    // for (let i = 0; i < local.ventas[i].length; i++) {
    // } if (local.ventas[i].fecha.getMonth() == 1) {
    // }

    var ventasAda = 0;
    var ventasGrace = 0;



    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            ventasDelMes = ventasDelMes + precioMaquina(local.ventas[i].componentes)
        }
    }

    return ventasDelMes

    //     if (local.ventas[i].fecha.getMonth() == 1 && local.ventas[i].nombreVendedora == "Grace")
    //        ventasDelMes + precioMaquina
    //     if (local.ventas[i].fecha.getMonth() == 2 && local.ventas[i].nombreVendedora == "Ada")
    //     console.log(ventasDelMes + precioMaquina)
    // }
}
//primero recorro ventas. ya lo hice despues tengo que filtar las ventas por el mes y año que queremos
//hasta ahi es igual a funcion vendedora del mes -- ventas del mes mas precio maquina - me toca ver si vendio ada o vendio grace

console.log(ventasMes(1, 2019)); // 1250
// ACA TERMINA ESA FUNCION-------------------------------------------------------
//Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
// el cliente me va a pasar un nombre de una vendedora, mi funcion tiene que ir a local.ventas, ver las ventas
// hechas por esa vendedora sin importar el mes 
// y tiene que sumar el total de todas las ventas - esto llamando a la funcion precioMaquina



function ventasVendedora(nombre) {

    var ventasTotales = 0;


    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].nombreVendedora == nombre) {
            ventasTotales = ventasTotales + precioMaquina(local.ventas[i].componentes)
        }

    } return ventasTotales
}

console.log(ventasVendedora("Grace")); // 900


//TERMINA ACA---------------

// Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {
    var componenteMio = local.precios[1].componente;

    for (var i = 0; i < local.precios.length; i++) {

        if (cantidadVentasComponente(local.precios[i].componente) > cantidadVentasComponente(componenteMio)) {
            componenteMio = local.precios[i].componente
        }
        // cantidadVentasComponente(local.precios[i].componente.push(array))
        //ACA EN VEZ DE HACER UN CONSOLE.log hago un PUSH y creo un array random que es lo que tengo mas abajo ya, ese var array
    }
    console.log('acaaaaaaaa', componenteMio)
    return componenteMio
    //ESTO ES PORQUE NEcesitroun codigo que recorra array y me diga cual es el numero mas alto y donde este
    //lista de ventas, lista de nombres

    //     var array = [1, 10, 5]


    //     var valorMaximo = 0;
    //     var posicionDelValorMaximo = 0;

    //         for (var i = 0; i < array.length; i++) {

    //             if (array[i] > valorMaximo) {
    //                 valorMaximo = array[i]
    //                 posicionDelValorMaximo = i

    // }
    // }
}
//para encontrar donde esta en valor maximo, puedo usar el metodo indexOf -- busca en un for que 
//esta buscando en un array.
//la manera que quiere male es

console.log(componenteMasVendido()); // Monitor GPRS 3000
//ACA TERMINAAAAAAAAA LA 6


// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio) {

    var guardoDato = '';
    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
          
           guardoDato = true
        } else {
            guardoDato = false
        }
    } return guardoDato
} 

console.log(huboVentas(3, 2019)); // false

// ACA TERMINA-------------------------------------------------------
// ACA EMPIEZA LA SEGUNDA PARTE--------------------------------------
