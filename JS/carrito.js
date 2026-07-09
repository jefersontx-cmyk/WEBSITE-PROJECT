// yo este archivo contiene código JavaScript con comentarios simples para aprender
/* ===========================================
   CARRITO DE COMPRAS - JAVASCRIPT COMPARTIDO
   - Gestión del carrito con localStorage
   - Funciones para agregar, eliminar y mostrar productos
   - Modal del carrito flotante
   =========================================== */

// Variable global para el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito guardado o iniciar vacío

// Función para actualizar el contador del carrito flotante
function actualizarContadorCarrito() { // yo defino una función que hace una acción específica
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0); // Sumar todas las cantidades
    const contador = document.getElementById('carrito-contador'); // Obtener elemento contador
    if (contador) { // yo verifico algo antes de continuar
        contador.textContent = totalItems; // Actualizar texto del contador
    }
}

// Vaciar el carrito por completo
function vaciarCarrito() { // yo defino una función que hace una acción específica
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio, imagen, talla) { // yo defino una función que hace una acción específica
    if (!talla) { // Validar que exista talla seleccionada // yo verifico algo antes de continuar
        alert('Por favor selecciona una talla antes de agregar al carrito.');
        return; // Detener si no hay talla // yo devuelvo este resultado
    }

    const productoExistente = carrito.find(item =>
        item.nombre === nombre && item.talla === talla // Buscar el mismo producto con misma talla
    );

    if (productoExistente) { // yo verifico algo antes de continuar
        productoExistente.cantidad += 1; // Sumar cantidad si ya existe
    } else { // yo verifico algo antes de continuar
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
        const toast = document.createElement('div'); // yo declaro toast para usarlo después
        toast.textContent = `${nombre} (Talla ${talla}) agregado al carrito`;
        toast.style.cssText = 'position:fixed;right:20px;bottom:20px;background:rgba(0,0,0,0.7);color:#fff;padding:8px 12px;border-radius:8px;z-index:9999;backdrop-filter:blur(6px)';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
    } catch (e) {
        console.log(`${nombre} (Talla ${talla}) agregado al carrito`);
    }
}

// Función para mostrar el modal del carrito
function mostrarCarrito() { // yo defino una función que hace una acción específica
    const modal = document.getElementById('modal-carrito'); // Contenedor del modal
    const itemsCarrito = document.getElementById('items-carrito'); // Área para listar items
    const totalCarrito = document.getElementById('total-carrito'); // Área de total

    if (!modal || !itemsCarrito || !totalCarrito) { // yo verifico algo antes de continuar
        console.error('Elementos del modal del carrito no encontrados');
        return; // Si faltan elementos, detener ejecución // yo devuelvo este resultado
    }

    itemsCarrito.innerHTML = ''; // Limpiar listado previo

    if (carrito.length === 0) { // yo verifico algo antes de continuar
        itemsCarrito.innerHTML = '<p>Tu carrito está vacío</p>'; // Mensaje cuando no hay items
        totalCarrito.textContent = 'Total: Q.0.00'; // Total cero
    } else { // yo verifico algo antes de continuar
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
        btn.addEventListener('click', function(e) { // yo le digo al navegador que escuche un evento del usuario
            const action = this.getAttribute('data-action'); // yo declaro action para usarlo después
            const idx = parseInt(this.getAttribute('data-index')); // yo declaro idx para usarlo después
            if (action === 'remove') eliminarDelCarrito(idx); // yo verifico algo antes de continuar
            if (action === 'increase') cambiarCantidad(idx, (carrito[idx].cantidad || 0) + 1); // yo verifico algo antes de continuar
            if (action === 'decrease') cambiarCantidad(idx, (carrito[idx].cantidad || 0) - 1); // yo verifico algo antes de continuar
        });
    });
}

// Función para cerrar el modal del carrito
function cerrarCarrito() { // yo defino una función que hace una acción específica
    const modal = document.getElementById('modal-carrito'); // Contenedor del modal
    if (modal) { // yo verifico algo antes de continuar
        modal.style.display = 'none'; // Ocultar modal
    }
}

// Función para eliminar item del carrito
function eliminarDelCarrito(index) { // yo defino una función que hace una acción específica
    if (index >= 0 && index < carrito.length) { // Verificar índice válido // yo verifico algo antes de continuar
        carrito.splice(index, 1); // Eliminar item
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios
        actualizarContadorCarrito(); // Actualizar contador
        mostrarCarrito(); // Actualizar vista del modal
    }
}

// Eliminar producto por nombre y talla (más seguro que usar índice en listas dinámicas)
function eliminarPorProducto(nombre, talla) { // yo defino una función que hace una acción específica
    const idx = carrito.findIndex(item => item.nombre === nombre && item.talla === talla); // yo declaro idx para usarlo después
    if (idx !== -1) eliminarDelCarrito(idx); // yo verifico algo antes de continuar
}

// Cambiar la cantidad de un item dado su índice; si queda en 0 se elimina
function cambiarCantidad(index, nuevaCantidad) { // yo defino una función que hace una acción específica
    if (index < 0 || index >= carrito.length) return; // yo verifico algo antes de continuar
    if (nuevaCantidad <= 0) { // yo verifico algo antes de continuar
        eliminarDelCarrito(index);
        return; // yo devuelvo este resultado
    }
    carrito[index].cantidad = parseInt(nuevaCantidad, 10);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    // Actualizar contador visual en modal si existe
    const span = document.getElementById(`cantidad-${index}`); // yo declaro span para usarlo después
    if (span) span.textContent = carrito[index].cantidad; // yo verifico algo antes de continuar
    // Actualizar total mostrado
    const totalCarrito = document.getElementById('total-carrito'); // yo declaro totalCarrito para usarlo después
    if (totalCarrito) { // yo verifico algo antes de continuar
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0); // yo declaro total para usarlo después
        totalCarrito.textContent = `Total: Q.${total.toFixed(2)}`;
    }
}

// Función para finalizar compra y enviar al formulario de contacto con los productos seleccionados
function finalizarCompra() { // yo defino una función que hace una acción específica
    if (carrito.length === 0) { // yo verifico algo antes de continuar
        alert('Tu carrito está vacío');
        return; // No hay compra si el carrito está vacío // yo devuelvo este resultado
    }

    const productosSeleccionados = carrito.map(item => `- ${item.nombre} (Talla ${item.talla}) x ${item.cantidad}`).join('\n'); // yo declaro productosSeleccionados para usarlo después
    const mensaje = `Hola, estoy interesado en los siguientes productos:\n${productosSeleccionados}\n\nPor favor contáctame para continuar con la compra.`; // yo declaro mensaje para usarlo después

    const estaEnHTML = window.location.pathname.includes('/HTML/'); // yo declaro estaEnHTML para usarlo después
    const rutaContacto = estaEnHTML ? 'Contacto.html' : 'HTML/Contacto.html'; // yo declaro rutaContacto para usarlo después

    carrito = []; // Vaciar el carrito al finalizar compra
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();

    window.location.href = `${rutaContacto}?mensaje=${encodeURIComponent(mensaje)}`;
}

// Función para seleccionar talla
function seleccionarTalla(elemento) { // yo defino una función que hace una acción específica
    document.querySelectorAll('.talla').forEach(talla => {
        talla.classList.remove('seleccionada'); // Quitar selección previa
    });

    elemento.classList.add('seleccionada'); // Marcar talla actual
    window.tallaSeleccionada = elemento.textContent; // Guardar talla seleccionada
}

// Función para cambiar imagen principal en la galería
function cambiarImagen(src) { // yo defino una función que hace una acción específica
    const imagenPrincipal = document.getElementById('imagen-principal'); // Elemento imagen principal
    if (imagenPrincipal) { // yo verifico algo antes de continuar
        imagenPrincipal.src = src; // Cambiar la imagen principal
    }
}

// Inicializar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() { // yo espero a que la página cargue antes de usar elementos del DOM
    actualizarContadorCarrito(); // Actualizar contador inmediato

    const modal = document.getElementById('modal-carrito'); // Modal de carrito
    if (modal) { // yo verifico algo antes de continuar
        modal.addEventListener('click', function(event) { // yo le digo al navegador que escuche un evento del usuario
            if (event.target === modal) { // yo verifico algo antes de continuar
                cerrarCarrito(); // Cerrar modal al hacer clic fuera
            }
        });
    }
    // Cerrar modal con Esc
    document.addEventListener('keydown', function(e) { // yo espero a que la página cargue antes de usar elementos del DOM
        if (e.key === 'Escape') cerrarCarrito(); // yo verifico algo antes de continuar
    });
    // Exponer funciones útiles para otros scripts o consola
    window.vaciarCarrito = vaciarCarrito;
    window.eliminarPorProducto = eliminarPorProducto;
    window.cambiarCantidad = cambiarCantidad;
});