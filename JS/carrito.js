/* ===========================================
   CARRITO DE COMPRAS - JAVASCRIPT COMPARTIDO
   - Gestión del carrito con localStorage
   - Funciones para agregar, eliminar y mostrar productos
   - Modal del carrito flotante
   =========================================== */

// Variable global para el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito guardado o iniciar vacío

// Función para actualizar el contador del carrito flotante
function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0); // Sumar todas las cantidades
    const contador = document.getElementById('carrito-contador'); // Obtener elemento contador
    if (contador) {
        contador.textContent = totalItems; // Actualizar texto del contador
    }
}

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio, imagen, talla) {
    if (!talla) { // Validar que exista talla seleccionada
        alert('Por favor selecciona una talla antes de agregar al carrito.');
        return; // Detener si no hay talla
    }

    const productoExistente = carrito.find(item =>
        item.nombre === nombre && item.talla === talla // Buscar el mismo producto con misma talla
    );

    if (productoExistente) {
        productoExistente.cantidad += 1; // Sumar cantidad si ya existe
    } else {
        carrito.push({
            nombre: nombre, // Nombre del producto
            precio: parseFloat(precio), // Precio convertido a número
            imagen: imagen, // URL de la imagen
            talla: talla, // Talla seleccionada
            cantidad: 1 // Cantidad inicial
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito actualizado
    actualizarContadorCarrito(); // Actualizar contador en pantalla

    alert(`¡${nombre} (Talla ${talla}) agregado al carrito!`); // Notificar al usuario
}

// Función para mostrar el modal del carrito
function mostrarCarrito() {
    const modal = document.getElementById('modal-carrito'); // Contenedor del modal
    const itemsCarrito = document.getElementById('items-carrito'); // Área para listar items
    const totalCarrito = document.getElementById('total-carrito'); // Área de total

    if (!modal || !itemsCarrito || !totalCarrito) {
        console.error('Elementos del modal del carrito no encontrados');
        return; // Si faltan elementos, detener ejecución
    }

    itemsCarrito.innerHTML = ''; // Limpiar listado previo

    if (carrito.length === 0) {
        itemsCarrito.innerHTML = '<p>Tu carrito está vacío</p>'; // Mensaje cuando no hay items
        totalCarrito.textContent = 'Total: Q.0.00'; // Total cero
    } else {
        carrito.forEach((item, index) => {
            const itemDiv = document.createElement('div'); // Crear contenedor del item
            itemDiv.className = 'item-carrito'; // Clase CSS
            itemDiv.innerHTML = `
                <div>
                    <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; margin-right: 15px;">
                    <strong>${item.nombre}</strong> (Talla ${item.talla})<br>
                    Cantidad: ${item.cantidad} x Q.${item.precio.toFixed(2)}
                </div>
                <div>
                    <button onclick="eliminarDelCarrito(${index})" style="background: #E60000; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Eliminar</button>
                </div>
            `; // HTML del item
            itemsCarrito.appendChild(itemDiv); // Agregar item al contenedor
        });

        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0); // Calcular total
        totalCarrito.textContent = `Total: Q.${total.toFixed(2)}`; // Mostrar total
    }

    modal.style.display = 'flex'; // Mostrar modal
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
    const modal = document.getElementById('modal-carrito'); // Contenedor del modal
    if (modal) {
        modal.style.display = 'none'; // Ocultar modal
    }
}

// Función para eliminar item del carrito
function eliminarDelCarrito(index) {
    if (index >= 0 && index < carrito.length) { // Verificar índice válido
        carrito.splice(index, 1); // Eliminar item
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios
        actualizarContadorCarrito(); // Actualizar contador
        mostrarCarrito(); // Actualizar vista del modal
    }
}

// Función para finalizar compra y enviar al formulario de contacto con los productos seleccionados
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return; // No hay compra si el carrito está vacío
    }

    const productosSeleccionados = carrito.map(item => `- ${item.nombre} (Talla ${item.talla}) x ${item.cantidad}`).join('\n');
    const mensaje = `Hola, estoy interesado en los siguientes productos:\n${productosSeleccionados}\n\nPor favor contáctame para continuar con la compra.`;

    const estaEnHTML = window.location.pathname.includes('/HTML/');
    const rutaContacto = estaEnHTML ? 'Contacto.html' : 'HTML/Contacto.html';

    carrito = []; // Vaciar el carrito al finalizar compra
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();

    window.location.href = `${rutaContacto}?mensaje=${encodeURIComponent(mensaje)}`;
}

// Función para seleccionar talla
function seleccionarTalla(elemento) {
    document.querySelectorAll('.talla').forEach(talla => {
        talla.classList.remove('seleccionada'); // Quitar selección previa
    });

    elemento.classList.add('seleccionada'); // Marcar talla actual
    window.tallaSeleccionada = elemento.textContent; // Guardar talla seleccionada
}

// Función para cambiar imagen principal en la galería
function cambiarImagen(src) {
    const imagenPrincipal = document.getElementById('imagen-principal'); // Elemento imagen principal
    if (imagenPrincipal) {
        imagenPrincipal.src = src; // Cambiar la imagen principal
    }
}

// Inicializar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito(); // Actualizar contador inmediato

    const modal = document.getElementById('modal-carrito'); // Modal de carrito
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                cerrarCarrito(); // Cerrar modal al hacer clic fuera
            }
        });
    }
});