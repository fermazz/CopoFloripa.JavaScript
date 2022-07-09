/**
 * Scripts para el cliente
 */


/**
 * Permite al cliente calcular valor en cuotas del servicio que va a seleccionar
 * Por el momento le coloco una constante, luego el cliente va a seleccionar cual servicio desea


let precioEfectivo = parseFloat(200000);

const multiplicar = (num1, num2) => Math.round(num1 * num2);

let elegirNumCuota = " ";

while (elegirNumCuota != 1 && elegirNumCuota != 3 && elegirNumCuota != 6 && elegirNumCuota != 9 && elegirNumCuota != 12) {

    elegirNumCuota = parseInt(prompt("Ingrese el número de cuotas com que desea pagar el servicio. \n1 cuota: sin interés \n3 cuotas: interés del 5% \n6 cuotas: interés del 10% \n9 cuotas: interés del 15% \n12 cuotas: interés del 20%"))

    switch (elegirNumCuota) {

        case 1:
            alert("Precio total en 1 cuota es: \n$" + precioEfectivo);
            break;

        case 3:
            alert("Precio total en 3 cuotas es:  \n$" + multiplicar(precioEfectivo, 1.05));
            break;

        case 6:
            alert("Precio total en 6 cuotas es: \n$" + multiplicar(precioEfectivo, 1.10));
            break;

        case 9:
            alert("Precio total en 9 cuotas es: \n$" + multiplicar(precioEfectivo, 1.15));
            break;

        case 12:
            alert("Precio total en 12 cuotas es: \n$" + multiplicar(precioEfectivo, 1.20));
            break;

        default:
            alert("No ingresaste un número de cuotas válido. Recuerda que puedes pagar en 1, 3, 6 9, o 12 cuotas");


    }

}*/