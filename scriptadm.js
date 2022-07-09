/**
 * Inicio de los Scripts para usurio administrador de la página
 * Va a permitir hacer ciertas tareas que corresponen al dueño de la página * 
 */


/**
 * Bienvenida
 */

function saludo() {


    let nombre = document.getElementById("userName");
    let userName = nombre.value;

    let email = document.getElementById("email");
    let userEmail = email.value;

    let edad = document.getElementById("edad");
    let userEdad = edad.value;

    let aviso = document.getElementById("aviso");


    if (userName != "" && userEmail != "" && userEdad != "") {
        aviso.innerHTML = "<p>Hola " + userName + "," + " te damos la bienvenida a nuestra página!!!</p>";
    } else {
        aviso.innerHTML = '<p> Debes ingresar todos los datos </p>';
    }

    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

    listaUser.push({
        nombreIngresado: userName,
        emailIngresado: userEmail,
        edadIngresada: userEdad,

    })

    localStorage.setItem("listaUser", JSON.stringify(listaUser))

}


let button = document.getElementById("button");
button.onclick = saludo;
button.onclick = datosEnviados;


let nombre = document.getElementById("userName");
let labelNombre = document.getElementById("labelNombre");


nombre.addEventListener("keyup", () => {
    if (nombre.value.length <= 2) {

        labelNombre.setAttribute("style", "color: red");
        labelNombre.innerHTML = "Nombre *Escriba como mínimo 3 caracteres"
    } else {
        labelNombre.setAttribute("style", "color: green");
        labelNombre.innerHTML = "Escriba el nombre de usuario"
    }

})





let arreglo_servicios = new Array();
let gen_id = 1;


/**
 * Acciones para el usuario administrador
 */

/*let check = true;
while (check) {

    let mensaje = "Indique lo que deser realizar: ";
    mensaje += "\n1) Cargar nuevo servicio";
    mensaje += "\n2) Eliminar servicio";
    mensaje += "\n3) Mostrar servicio";
    mensaje += "\n4) Aplicar descuento";
    mensaje += "\n5) Salir";


    let respuesta = prompt(mensaje);

    switch (respuesta) {

        case "1":
            ingresar_nuevo_servicio();
            break;

        case "2":
            eliminar_servicio();
            break;

        case "3":
            mostrar_servicio();
            break;

        case "4":
            aplicar_descuento();
            break;

        case "5":
            alert("Gracias por visitarnos");
            check = false;
            break;

        case null:
            alert("Gracias por visitarnos");
            check = false;
            break;

        default:
            alert("Gracias por visitarnos");

    }

}

function ingresar_nuevo_servicio() {

    let servicio = solicitar_datos_servicio()

    if (servicio) {

        servicio.set_id(gen_id);
        gen_id++;
        arreglo_servicios.push(servicio);
        alert("Se agregó con éxito el servicio: ");
        console.log(arreglo_servicios);

        // cuando se agregue el serv que diga la descripcion

    }
}

function solicitar_datos_servicio() {

    let check1 = true;

    while (check1) {

        let msj = "";

        let nombre = prompt("Ingrese nombre del servicio").trim();
        let duracion = parseInt(prompt("Ingrese cuantas horas dura el servicio o actividad").trim());
        let precio = parseFloat(prompt("Ingrese precio del servicio").trim());

        if (!nombre) {

            msj += "\nDebe ingresar el nombre del servicio";

        }

        if (isNaN(duracion)) {

            msj += "\nDebe ingresar el número de horas que dura el servicio";

        }

        if (isNaN(precio)) {

            msj += "\nDebe ingresar un valor numérico para el precio";

        }

        if (msj != "") {

            alert(msj);
            check1 = confirm("Desea cargar de nuevo los datos?");

        } else {

            return new Servicios(nombre, duracion, precio);

        }
    }
}

function eliminar_servicio() {

    if (existen_servicios()) {

        let id_ingresado = prompt("Ingrese el id del servicio a eliminar");

        if (id_ingresado) {

            let servicio_encontrado = arreglo_servicios.find((s) => s.id == id_ingresado);

            if (servicio_encontrado) {

                let resp = confirm("Está seguro que desea eliminar el auto: " + servicio_encontrado.mostrar_descripcion());
                if (resp) {

                    arreglo_servicios = arreglo_servicios.filter((s) => s.id != id_ingresado);
                    alert("Eliminaste el servicio");
                }
            }

        }

    }
}

function mostrar_servicio() {

    if (existen_servicios()) {

        mostrar_arreglo();

    }
}

function mostrar_arreglo() {

    let mensaje = "Los servicios disponibles son:";

    arreglo_servicios.forEach((servicio) => {

        mensaje += "\n " + servicio.mostrar_descripcion();
    })

    alert(mensaje);
}

function existen_servicios() {

    if (arreglo_servicios.length == 0) {

        alert("No cargaste servicios");
        return false;

    } else {

        return true;
    }
}*/