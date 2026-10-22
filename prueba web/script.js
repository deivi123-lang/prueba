

const productos = [

    {
        id: 1,
        nombre: "Cuaderno Aesthetic",
        categoria: "Cuadernos",
        precio: 35,
        emoji: "📓",
        imagen:"imagenes/tulip.png"
        descripcion: "Cuaderno bonito de tapa dura."
    },

    {
        id: 2,
        nombre: "Cuaderno Floral",
        categoria: "Cuadernos",
        precio: 32,
        emoji: "🌸",
        descripcion: "Diseño floral delicado."
    },

    {
        id: 3,
        nombre: "Cuaderno Vintage",
        categoria: "Cuadernos",
        precio: 38,
        emoji: "📖",
        descripcion: "Estilo vintage y elegante."
    },

    {
        id: 4,
        nombre: "Cuaderno Minimalista",
        categoria: "Cuadernos",
        precio: 30,
        emoji: "📔",
        descripcion: "Diseño limpio y minimalista."
    },

    {
        id: 5,
        nombre: "Agenda Aesthetic 2026",
        categoria: "Agendas",
        precio: 55,
        emoji: "📒",
        descripcion: "Organiza todos tus días."
    },

    {
        id: 6,
        nombre: "Agenda Floral",
        categoria: "Agendas",
        precio: 60,
        emoji: "🌷",
        descripcion: "Agenda con diseño floral."
    },

    {
        id: 7,
        nombre: "Planner Semanal",
        categoria: "Agendas",
        precio: 28,
        emoji: "🗓️",
        descripcion: "Planifica tu semana fácilmente."
    },

    {
        id: 8,
        nombre: "Planner de Estudio",
        categoria: "Agendas",
        precio: 32,
        emoji: "📚",
        descripcion: "Ideal para organizar tus estudios."
    },

    {
        id: 9,
        nombre: "Bolígrafo Gel Rosa",
        categoria: "Escritura",
        precio: 8,
        emoji: "🖊️",
        descripcion: "Tinta suave de color negro."
    },

    {
        id: 10,
        nombre: "Bolígrafo Gel Azul",
        categoria: "Escritura",
        precio: 8,
        emoji: "🖊️",
        descripcion: "Escritura suave y precisa."
    },

    {
        id: 11,
        nombre: "Set de Lapiceros Pastel",
        categoria: "Escritura",
        precio: 25,
        emoji: "🖍️",
        descripcion: "Set de 5 colores pastel."
    },

    {
        id: 12,
        nombre: "Lápiz HB Aesthetic",
        categoria: "Escritura",
        precio: 5,
        emoji: "✏️",
        descripcion: "Lápiz HB para escritura y dibujo."
    },

    {
        id: 13,
        nombre: "Resaltadores Pastel",
        categoria: "Colores",
        precio: 25,
        emoji: "🖍️",
        descripcion: "Set de 6 resaltadores pastel."
    },

    {
        id: 14,
        nombre: "Marcadores Aesthetic",
        categoria: "Colores",
        precio: 30,
        emoji: "🎨",
        descripcion: "Marcadores de colores suaves."
    },

    {
        id: 15,
        nombre: "Lápices de Colores",
        categoria: "Colores",
        precio: 35,
        emoji: "🌈",
        descripcion: "Caja de 12 lápices de colores."
    },

    {
        id: 16,
        nombre: "Acuarelas Pastel",
        categoria: "Colores",
        precio: 42,
        emoji: "🎨",
        descripcion: "Set de acuarelas para crear."
    },

    {
        id: 17,
        nombre: "Mochila Escolar",
        categoria: "Escolar",
        precio: 120,
        emoji: "🎒",
        descripcion: "Mochila cómoda y resistente."
    },

    {
        id: 18,
        nombre: "Cartuchera Aesthetic",
        categoria: "Escolar",
        precio: 45,
        emoji: "👝",
        descripcion: "Cartuchera amplia y bonita."
    },

    {
        id: 19,
        nombre: "Regla 30 cm",
        categoria: "Escolar",
        precio: 7,
        emoji: "📏",
        descripcion: "Regla transparente de 30 cm."
    },

    {
        id: 20,
        nombre: "Tijera Escolar",
        categoria: "Escolar",
        precio: 12,
        emoji: "✂️",
        descripcion: "Tijera escolar de punta segura."
    },

    {
        id: 21,
        nombre: "Pegamento Escolar",
        categoria: "Escolar",
        precio: 10,
        emoji: "🧴",
        descripcion: "Pegamento para trabajos escolares."
    },

    {
        id: 22,
        nombre: "Post-it Pastel",
        categoria: "Escolar",
        precio: 18,
        emoji: "📝",
        descripcion: "Notas adhesivas de colores pastel."
    },

    {
        id: 23,
        nombre: "Stickers Aesthetic",
        categoria: "Colores",
        precio: 15,
        emoji: "✨",
        descripcion: "Stickers decorativos variados."
    },

    {
        id: 24,
        nombre: "Washi Tape Floral",
        categoria: "Colores",
        precio: 12,
        emoji: "🎀",
        descripcion: "Cinta decorativa floral."
    },

    {
        id: 25,
        nombre: "Set de Marcadores",
        categoria: "Colores",
        precio: 40,
        emoji: "🖍️",
        descripcion: "Marcadores para lettering."
    },

    {
        id: 26,
        nombre: "Libro de Dibujo",
        categoria: "Cuadernos",
        precio: 28,
        emoji: "🎨",
        descripcion: "Libro para practicar dibujo."
    },

    {
        id: 27,
        nombre: "Diario Personal",
        categoria: "Cuadernos",
        precio: 45,
        emoji: "📔",
        descripcion: "Diario personal con cierre."
    },

    {
        id: 28,
        nombre: "Estuche de Escritura",
        categoria: "Escritura",
        precio: 38,
        emoji: "🖊️",
        descripcion: "Estuche con útiles básicos."
    },

    {
        id: 29,
        nombre: "Kit Escolar Aesthetic",
        categoria: "Escolar",
        precio: 75,
        emoji: "🎒",
        descripcion: "Kit completo para estudiantes."
    },

    {
        id: 30,
        nombre: "Kit Creativo",
        categoria: "Colores",
        precio: 65,
        emoji: "🌈",
        descripcion: "Todo para dejar volar tu creatividad."
    }

];

/* =========================================================
   2. VARIABLES
========================================================= */

let carrito = [];

let categoriaActual = "Todos";

/* =========================================================
   3. ELEMENTOS HTML
========================================================= */

const contenedorProductos =
    document.querySelector(".productos");

const botonesFiltro =
    document.querySelectorAll(".filtro");

const buscador =
    document.querySelector(".buscador-contenido input");

const botonCarrito =
    document.querySelector(".boton-carrito");

const fondoCarrito =
    document.querySelector(".fondo-carrito");

const cerrarCarrito =
    document.querySelector(".cerrar-carrito");

const productosCarrito =
    document.querySelector(".productos-carrito");

const contadorCarrito =
    document.querySelector(".boton-carrito b");

const totalCarrito =
    document.querySelector("#totalCarrito");

const botonVaciar =
    document.querySelector(".boton-vaciar");

const botonComprar =
    document.querySelector(".boton-comprar");

const botonArriba =
    document.querySelector(".volver-arriba");

/* =========================================================
   4. CARGAR CARRITO
========================================================= */

function cargarCarrito() {

    const carritoGuardado =
        localStorage.getItem("carritoJosefina");

    if (carritoGuardado) {

        carrito =
            JSON.parse(carritoGuardado);

    }

    actualizarCarrito();

}

/* =========================================================
   5. GUARDAR CARRITO
========================================================= */

function guardarCarrito() {

    localStorage.setItem(
        "carritoJosefina",
        JSON.stringify(carrito)
    );

}

/* =========================================================
   6. MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(lista = productos) {

    if (!contenedorProductos) {
        return;
    }

    if (lista.length === 0) {

        contenedorProductos.innerHTML = `

            <div class="sin-productos">

                <div>
                    🔎
                </div>

                <h3>
                    No encontramos productos
                </h3>

                <p>
                    Intenta buscar algo diferente.
                </p>

            </div>

        `;

        return;

    }

    contenedorProductos.innerHTML =
        lista.map(producto => `

            <article
                class="producto"
                data-id="${producto.id}"
            >

                <div class="producto-imagen">

                    ${producto.emoji}

                </div>

                <div class="producto-info">

                    <span class="producto-categoria">

                        ${producto.categoria}

                    </span>

                    <h3>

                        ${producto.nombre}

                    </h3>

                    <p class="producto-descripcion">

                        ${producto.descripcion}

                    </p>

                    <div class="producto-precio">

                        Bs. ${producto.precio.toFixed(2)}

                    </div>

                    <button
                        class="boton-agregar"
                        data-id="${producto.id}"
                    >

                        🛒 AGREGAR AL CARRITO

                    </button>

                </div>

            </article>

        `).join("");

    activarBotonesAgregar();

    activarEfecto3D();

}

/* =========================================================
   7. BOTONES AGREGAR
========================================================= */

function activarBotonesAgregar() {

    const botones =
        document.querySelectorAll(".boton-agregar");

    botones.forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                const id =
                    Number(boton.dataset.id);

                agregarAlCarrito(id);

            }
        );

    });

}

/* =========================================================
   8. AGREGAR AL CARRITO
========================================================= */

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            producto => producto.id === id
        );

    if (!producto) {
        return;
    }

    const productoExistente =
        carrito.find(
            item => item.id === id
        );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            ...producto,

            cantidad: 1

        });

    }

    guardarCarrito();

    actualizarCarrito();

    abrirCarrito();

    mostrarMensaje(
        `${producto.nombre} fue agregado al carrito ♡`
    );

}

/* =========================================================
   9. ACTUALIZAR CARRITO
========================================================= */

function actualizarCarrito() {

    if (!productosCarrito) {
        return;
    }

    let cantidadTotal = 0;

    let precioTotal = 0;

    carrito.forEach(producto => {

        cantidadTotal +=
            producto.cantidad;

        precioTotal +=
            producto.precio *
            producto.cantidad;

    });

    contadorCarrito.textContent =
        cantidadTotal;

    totalCarrito.textContent =
        `Bs. ${precioTotal.toFixed(2)}`;

    if (carrito.length === 0) {

        productosCarrito.innerHTML = `

            <div class="carrito-vacio">

                <div>
                    🛒
                </div>

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega tus productos favoritos.
                </p>

            </div>

        `;

        return;

    }

    productosCarrito.innerHTML =
        carrito.map(producto => `

            <div
                class="item-carrito"
                data-id="${producto.id}"
            >

                <div
                    class="item-carrito-imagen"
                    style="
                        width:70px;
                        height:70px;
                        display:grid;
                        place-items:center;
                        background:#f5dfd8;
                        border-radius:15px;
                        font-size:32px;
                        flex-shrink:0;
                    "
                >

                    ${producto.emoji}

                </div>

                <div
                    style="
                        flex:1;
                        padding:0 12px;
                    "
                >

                    <h3
                        style="
                            font-family:'Cormorant Garamond',serif;
                            font-size:19px;
                        "
                    >

                        ${producto.nombre}

                    </h3>

                    <p
                        style="
                            margin-top:4px;
                            color:#a96f64;
                            font-size:13px;
                        "
                    >

                        Bs. ${producto.precio.toFixed(2)}

                    </p>

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:10px;
                            margin-top:10px;
                        "
                    >

                        <button
                            class="cantidad-btn"
                            data-id="${producto.id}"
                            data-accion="restar"
                            style="
                                width:25px;
                                height:25px;
                                border:none;
                                border-radius:50%;
                                background:#f1ddd7;
                                cursor:pointer;
                            "
                        >
                            −
                        </button>

                        <strong>

                            ${producto.cantidad}

                        </strong>

                        <button
                            class="cantidad-btn"
                            data-id="${producto.id}"
                            data-accion="sumar"
                            style="
                                width:25px;
                                height:25px;
                                border:none;
                                border-radius:50%;
                                background:#f1ddd7;
                                cursor:pointer;
                            "
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="eliminar-producto"
                    data-id="${producto.id}"
                    style="
                        border:none;
                        background:transparent;
                        color:#b57b71;
                        font-size:20px;
                        cursor:pointer;
                    "
                    aria-label="Eliminar producto"
                >

                    ×

                </button>

            </div>

        `).join("");

    activarBotonesCarrito();

}

/* =========================================================
   10. BOTONES DEL CARRITO
========================================================= */

function activarBotonesCarrito() {

    const botonesCantidad =
        document.querySelectorAll(".cantidad-btn");

    botonesCantidad.forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                const id =
                    Number(boton.dataset.id);

                const accion =
                    boton.dataset.accion;

                cambiarCantidad(
                    id,
                    accion
                );

            }
        );

    });

    const botonesEliminar =
        document.querySelectorAll(
            ".eliminar-producto"
        );

    botonesEliminar.forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                const id =
                    Number(boton.dataset.id);

                eliminarProducto(id);

            }
        );

    });

}

/* =========================================================
   11. CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(id, accion) {

    const producto =
        carrito.find(
            item => item.id === id
        );

    if (!producto) {
        return;
    }

    if (accion === "sumar") {

        producto.cantidad++;

    }

    if (accion === "restar") {

        producto.cantidad--;

    }

    if (producto.cantidad <= 0) {

        carrito =
            carrito.filter(
                item => item.id !== id
            );

    }

    guardarCarrito();

    actualizarCarrito();

}

/* =========================================================
   12. ELIMINAR PRODUCTO
========================================================= */

function eliminarProducto(id) {

    carrito =
        carrito.filter(
            producto => producto.id !== id
        );

    guardarCarrito();

    actualizarCarrito();

}

/* =========================================================
   13. VACIAR CARRITO
========================================================= */

if (botonVaciar) {

    botonVaciar.addEventListener(
        "click",
        () => {

            if (carrito.length === 0) {
                return;
            }

            const confirmar =
                confirm(
                    "¿Quieres vaciar todo el carrito?"
                );

            if (confirmar) {

                carrito = [];

                guardarCarrito();

                actualizarCarrito();

            }

        }
    );

}

/* =========================================================
   14. ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    fondoCarrito.classList.add(
        "activo"
    );

    fondoCarrito.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}

/* =========================================================
   15. CERRAR CARRITO
========================================================= */

function cerrarCarritoFuncion() {

    fondoCarrito.classList.remove(
        "activo"
    );

    fondoCarrito.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}

/* BOTÓN CARRITO */

if (botonCarrito) {

    botonCarrito.addEventListener(
        "click",
        abrirCarrito
    );

}

/* BOTÓN CERRAR */

if (cerrarCarrito) {

    cerrarCarrito.addEventListener(
        "click",
        cerrarCarritoFuncion
    );

}

/* CERRAR HACIENDO CLICK AFUERA */

if (fondoCarrito) {

    fondoCarrito.addEventListener(
        "click",
        evento => {

            if (
                evento.target ===
                fondoCarrito
            ) {

                cerrarCarritoFuncion();

            }

        }
    );

}

/* =========================================================
   16. ESC PARA CERRAR
========================================================= */

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            cerrarCarritoFuncion();

        }

    }
);

/* =========================================================
   17. FILTROS DE CATEGORÍA
========================================================= */

botonesFiltro.forEach(boton => {

    boton.addEventListener(
        "click",
        () => {

            botonesFiltro.forEach(
                boton =>
                    boton.classList.remove(
                        "activo"
                    )
            );

            boton.classList.add(
                "activo"
            );

            categoriaActual =
                boton.dataset.categoria;

            filtrarProductos();

        }
    );

});

/* =========================================================
   18. FILTRAR PRODUCTOS
========================================================= */

function filtrarProductos() {

    const texto =
        buscador
            ? buscador.value
                .toLowerCase()
                .trim()
            : "";

    let resultado =
        productos.filter(producto => {

            const coincideCategoria =
                categoriaActual === "Todos" ||
                producto.categoria ===
                categoriaActual;

            const coincideBusqueda =
                producto.nombre
                    .toLowerCase()
                    .includes(texto) ||

                producto.descripcion
                    .toLowerCase()
                    .includes(texto) ||

                producto.categoria
                    .toLowerCase()
                    .includes(texto);

            return (
                coincideCategoria &&
                coincideBusqueda
            );

        });

    mostrarProductos(resultado);

}

/* =========================================================
   19. BUSCADOR
========================================================= */

if (buscador) {

    buscador.addEventListener(
        "input",
        filtrarProductos
    );

}

/* =========================================================
   20. WHATSAPP
========================================================= */

/*
   IMPORTANTE:

   Cambia este número por el WhatsApp real
   de Librería Doña Josefina.

   Formato:
   código de país + número

   Bolivia:
   591 + número
*/

const numeroWhatsApp =
    "59168575636";

function comprarPorWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }

    let mensaje =
        "🌸 *LIBRERÍA DOÑA JOSEFINA* 🌸\n\n";

    mensaje +=
        "Hola, quiero realizar el siguiente pedido:\n\n";

    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;

        mensaje +=
            `📚 ${producto.nombre}\n`;

        mensaje +=
            `   Cantidad: ${producto.cantidad}\n`;

        mensaje +=
            `   Precio: Bs. ${subtotal.toFixed(2)}\n\n`;

    });

    let total = 0;

    carrito.forEach(producto => {

        total +=
            producto.precio *
            producto.cantidad;

    });

    mensaje +=
        `💰 *TOTAL: Bs. ${total.toFixed(2)}*\n\n`;

    mensaje +=
        "¡Gracias! ♡";

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
            mensaje
        )}`;

    window.open(
        url,
        "_blank"
    );

}

if (botonComprar) {

    botonComprar.addEventListener(
        "click",
        comprarPorWhatsApp
    );

}

/* =========================================================
   21. MENSAJE TEMPORAL
========================================================= */

function mostrarMensaje(texto) {

    const mensajeAnterior =
        document.querySelector(
            ".mensaje-temporal"
        );

    if (mensajeAnterior) {

        mensajeAnterior.remove();

    }

    const mensaje =
        document.createElement("div");

    mensaje.className =
        "mensaje-temporal";

    mensaje.textContent =
        texto;

    mensaje.style.cssText = `

        position: fixed;
        top: 100px;
        right: 25px;
        z-index: 5000;

        max-width: 320px;

        padding: 15px 22px;

        border-radius: 50px;

        background: #60483f;

        color: white;

        font-size: 12px;

        box-shadow:
            0 15px 35px rgba(0,0,0,.18);

        animation:
            mensajeEntrada .4s ease both;

    `;

    document.body.appendChild(
        mensaje
    );

    setTimeout(() => {

        mensaje.style.opacity =
            "0";

        mensaje.style.transform =
            "translateY(-15px)";

        mensaje.style.transition =
            "all .3s ease";

        setTimeout(() => {

            mensaje.remove();

        }, 300);

    }, 2500);

}

/* =========================================================
   22. EFECTO 3D EN PRODUCTOS
========================================================= */

function activarEfecto3D() {

    const tarjetas =
        document.querySelectorAll(
            ".producto"
        );

    tarjetas.forEach(tarjeta => {

        tarjeta.addEventListener(
            "mousemove",
            evento => {

                if (
                    window.innerWidth < 700
                ) {
                    return;
                }

                const rect =
                    tarjeta.getBoundingClientRect();

                const x =
                    evento.clientX -
                    rect.left;

                const y =
                    evento.clientY -
                    rect.top;

                const centroX =
                    rect.width / 2;

                const centroY =
                    rect.height / 2;

                const rotacionX =
                    ((y - centroY) /
                    centroY) * -5;

                const rotacionY =
                    ((x - centroX) /
                    centroX) * 5;

                tarjeta.style.transform = `

                    perspective(900px)

                    rotateX(${rotacionX}deg)

                    rotateY(${rotacionY}deg)

                    translateY(-5px)

                `;

            }
        );

        tarjeta.addEventListener(
            "mouseleave",
            () => {

                tarjeta.style.transform =
                    "";

            }
        );

    });

}

/* =========================================================
   23. BOTÓN VOLVER ARRIBA
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            botonArriba.classList.add(
                "visible"
            );

        } else {

            botonArriba.classList.remove(
                "visible"
            );

        }

    }
);

if (botonArriba) {

    botonArriba.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}

/* =========================================================
   24. ANIMACIÓN AL HACER SCROLL
========================================================= */

function animarAlScroll() {

    const elementos =
        document.querySelectorAll(
            ".categoria-card, .producto, .contacto-card, .nosotros-contenido"
        );

    const observador =
        new IntersectionObserver(
            elementosObservados => {

                elementosObservados.forEach(
                    elemento => {

                        if (
                            elemento.isIntersecting
                        ) {

                            elemento.target.style.opacity =
                                "1";

                            elemento.target.style.transform =
                                "translateY(0)";

                            observador.unobserve(
                                elemento.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );

    elementos.forEach(elemento => {

        elemento.style.opacity =
            "0";

        elemento.style.transform =
            "translateY(25px)";

        elemento.style.transition =
            "opacity .6s ease, transform .6s ease";

        observador.observe(elemento);

    });

}

/* =========================================================
   25. EFECTO PARALLAX DEL LIBRO
========================================================= */

const libro =
    document.querySelector(".libro-3d");

if (libro) {

    document.addEventListener(
        "mousemove",
        evento => {

            if (
                window.innerWidth < 800
            ) {
                return;
            }

            const x =
                (window.innerWidth / 2 -
                evento.clientX) / 40;

            const y =
                (window.innerHeight / 2 -
                evento.clientY) / 50;

            libro.style.transform = `

                rotateY(${-20 + x}deg)

                rotateX(${7 + y}deg)

                rotateZ(-3deg)

            `;

        }
    );

}

/* =========================================================
   26. EVITAR QUE EL LIBRO SIGA EL RATÓN EN CELULAR
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth < 800 &&
            libro
        ) {

            libro.style.transform =
                "";

        }

    }
);

/* =========================================================
   27. INICIAR PÁGINA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarProductos();

        cargarCarrito();

        animarAlScroll();

    }
);

/* =========================================================
   28. ESTILO PARA ANIMACIÓN DEL MENSAJE
========================================================= */

const estiloMensaje =
    document.createElement("style");

estiloMensaje.textContent = `

    @keyframes mensajeEntrada {

        from {

            opacity: 0;

            transform:
                translateY(-20px);

        }

        to {

            opacity: 1;

            transform:
                translateY(0);

        }

    }

    .item-carrito {

        display: flex;

        align-items: center;

        padding: 18px 0;

        border-bottom:
            1px solid #ead9d1;

    }

`;

document.head.appendChild(
    estiloMensaje
);




