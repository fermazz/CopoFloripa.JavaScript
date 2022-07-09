const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener('DOMContentLoaded', () => {

    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
});

cards.addEventListener('click', e => {

    addCarrito(e)
});

items.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {

    try {
        const res = await fetch('data.json');
        const data = await res.json();
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
};

const pintarCards = data => {

    data.forEach(servicio => {
        templateCard.querySelector('h5').textContent = servicio.titulo;
        templateCard.querySelector('p').textContent = servicio.precio;
        templateCard.querySelector('img').setAttribute("src", servicio.imagen);
        templateCard.querySelector('.btn-dark').dataset.id = servicio.id


        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    });

    cards.appendChild(fragment);

};

const addCarrito = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('btn-dark'));
    if (e.target.classList.contains('btn-dark')) {

        setCarrito(e.target.parentElement);
        agregarNotificacion("Servicio agregado", 2000);

    }
    e.stopPropagation()
};

const setCarrito = objeto => {
    // console.log(objeto);
    const servicio = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        titulo: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(servicio.id)) {
        servicio.cantidad = carrito[servicio.id].cantidad + 1

    }

    carrito[servicio.id] = {
        ...servicio
    }

    pintarCarrito()
};

const pintarCarrito = () => {
    // console.log(carrito)
    items.innerHTML = ""
    Object.values(carrito).forEach(servicio => {
        templateCarrito.querySelector('th').textContent = servicio.id
        templateCarrito.querySelectorAll('td')[0].textContent = servicio.titulo
        templateCarrito.querySelectorAll('td')[1].textContent = servicio.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = servicio.id
        templateCarrito.querySelector('.btn-danger').dataset.id = servicio.id
        templateCarrito.querySelector('span').textContent = servicio.cantidad * servicio.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {

        footer.innerHTML = `
        <th scope="row" colspan="5">El carrito está vacío</th
        `
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {
        cantidad,
        precio
    }) => acc + cantidad * precio, 0)


    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    // console.log(e.target)
    // Acción de aumentar
    if (e.target.classList.contains('btn-info')) {
        // console.log(carrito[e.target.dataset.id])
        // carrito[e.target.dataset.id]
        const servicio = carrito[e.target.dataset.id]
        servicio.cantidad++
        carrito[e.target.dataset.id] = {
            ...servicio
        }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const servicio = carrito[e.target.dataset.id]
        servicio.cantidad--
        if (servicio.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }

    e.stopPropagation()
}

const agregarNotificacion = (mensaje, duracion) => {


    Toastify({

        text: mensaje,

        duration: duracion

    }).showToast();

}

