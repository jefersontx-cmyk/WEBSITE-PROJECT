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

// Vaciar el carrito por completo
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
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

    // Notificación no intrusiva: crear un toast pequeño si es posible
    try {
        const toast = document.createElement('div');
        toast.textContent = `${nombre} (Talla ${talla}) agregado al carrito`;
        toast.style.cssText = 'position:fixed;right:20px;bottom:20px;background:rgba(0,0,0,0.7);color:#fff;padding:8px 12px;border-radius:8px;z-index:9999;backdrop-filter:blur(6px)';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
    } catch (e) {
        console.log(`${nombre} (Talla ${talla}) agregado al carrito`);
    }
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
                <div style="display:flex;align-items:center;gap:12px;">
                    <img src="${item.imagen}" alt="${item.nombre}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <strong>${item.nombre}</strong> <br>
                        <small>Talla ${item.talla}</small>
                    </div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
                    <div style="display:flex;gap:8px;align-items:center;">
                        <button data-action="decrease" data-index="${index}" style="background:#2b2b2b;color:#fff;border:none;padding:6px 8px;border-radius:6px;cursor:pointer;">−</button>
                        <span id="cantidad-${index}">${item.cantidad}</span>
                        <button data-action="increase" data-index="${index}" style="background:#2b2b2b;color:#fff;border:none;padding:6px 8px;border-radius:6px;cursor:pointer;">+</button>
                    </div>
                    <div>
                        <span>Cant: ${item.cantidad} x Q.${item.precio.toFixed(2)}</span>
                    </div>
                    <div>
                        <button data-action="remove" data-index="${index}" style="background: #E60000; color: white; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer;">Eliminar</button>
                    </div>
                </div>
            `;
            itemsCarrito.appendChild(itemDiv); // Agregar item al contenedor
        });

        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0); // Calcular total
        totalCarrito.textContent = `Total: Q.${total.toFixed(2)}`; // Mostrar total
    }

    modal.style.display = 'flex'; // Mostrar modal

    // Agregar delegación de eventos para botones de cantidad / eliminar
    itemsCarrito.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const action = this.getAttribute('data-action');
            const idx = parseInt(this.getAttribute('data-index'));
            if (action === 'remove') eliminarDelCarrito(idx);
            if (action === 'increase') cambiarCantidad(idx, (carrito[idx].cantidad || 0) + 1);
            if (action === 'decrease') cambiarCantidad(idx, (carrito[idx].cantidad || 0) - 1);
        });
    });
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

// Eliminar producto por nombre y talla (más seguro que usar índice en listas dinámicas)
function eliminarPorProducto(nombre, talla) {
    const idx = carrito.findIndex(item => item.nombre === nombre && item.talla === talla);
    if (idx !== -1) eliminarDelCarrito(idx);
}

// Cambiar la cantidad de un item dado su índice; si queda en 0 se elimina
function cambiarCantidad(index, nuevaCantidad) {
    if (index < 0 || index >= carrito.length) return;
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(index);
        return;
    }
    carrito[index].cantidad = parseInt(nuevaCantidad, 10);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    // Actualizar contador visual en modal si existe
    const span = document.getElementById(`cantidad-${index}`);
    if (span) span.textContent = carrito[index].cantidad;
    // Actualizar total mostrado
    const totalCarrito = document.getElementById('total-carrito');
    if (totalCarrito) {
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        totalCarrito.textContent = `Total: Q.${total.toFixed(2)}`;
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
    // Cerrar modal con Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') cerrarCarrito();
    });
    // Exponer funciones útiles para otros scripts o consola
    window.vaciarCarrito = vaciarCarrito;
    window.eliminarPorProducto = eliminarPorProducto;
    window.cambiarCantidad = cambiarCantidad;
});