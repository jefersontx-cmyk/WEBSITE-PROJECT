/* ===========================================
   DATOS DE PRODUCTOS - BASE DE DATOS SIMPLE
   - Información de todos los productos disponibles
   - Estructura para productos dinámicos
   =========================================== */

const productos = { 

/* Apartado de Equipacion AC */

    'equipacion-gua': {
        nombre: 'Selección de Guatemala',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Guatemala, referente al area de Concacaf',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/equipacion-gua.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-arg': {
        nombre: 'Selección de Argentina',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Argentina, actual campeona del mundo',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/equipacion-arg.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-ale': {
        nombre: 'Selección de Alemania',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Alemana, la tetra campeona del mundo',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/equipacion-ale.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },
    
    'equipacion-por': {
        nombre: 'Selección de Portugal',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Portugal, candidata a campeonar el mundial',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/equipacion-por.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-esp': {
        nombre: 'Selección de España',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de España, la poderosa furia roja',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/equipacion-esp.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },
    
    'equipacion-fra': {
        nombre: 'Selección de Francia',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Francia, la elegante bicampeona',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente', 
        imagenes: [
            '../images/equipacion-fra.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-ita': {
        nombre: 'Selección de Italia',
        precio: 450.00,
        descripcion: 'La equipacón oficial de la selección de Italia, la elegancia italiana nunca falla',
        caracteristicas: [
            'Material ligero',
            'Tejido transpirable',
            'Gestion de Humedad',
            'Diseño profesional',
            'Secado Rápido',
        ],
        cuidados: 'No lavar con agua caliente', 
        imagenes: [
            '../images/equipacion-ita.jpeg'
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    // Tacos
    'quetxil': {
        nombre: 'Quetxil',
        precio: 650.00,
        descripcion: 'Tacos profesionales diseñados para máxima velocidad y control en el campo.',
        caracteristicas: [
            'Suela de alta tracción',
            'Material sintético resistente',
            'Sistema de amortiguación',
            'Diseño ligero',
            'Tecnología anti-deslizante'
        ],
        cuidados: 'Limpiar con agua y jabón neutro, secar completamente antes de guardar.',
        imagenes: [
            '../images/tacos1.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'wonderping': {
        nombre: 'Wonderping',
        precio: 650.00,
        descripcion: 'Tacos clásicos versátiles perfectos para entrenamientos diarios y partidos recreativos.',
        caracteristicas: [
            'Suela duradera',
            'Material cómodo',
            'Buen agarre en césped',
            'Diseño clásico',
            'Precio accesible'
        ],
        cuidados: 'Limpiar después de cada uso, guardar en lugar fresco y seco.',
        imagenes: [
            '../images/tacos2.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'allegiance': {
        nombre: 'Allegiance',
        precio: 650.00,
        descripcion: 'Tacos profesionales de color rojo diseñados para máxima velocidad y control en el campo.',
        caracteristicas: [
            'Ligeros con toques del libertad',
            'Material sintético resistente',
            'Sistema de amortiguación avanzado',
            'Diseño elegante en rojo',
            'Tecnología anti-deslizante premium'
        ],
        cuidados: 'Limpiar con agua y jabón neutro, secar completamente antes de guardar.',
        imagenes: [
            '../images/tacos3.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'cavitasoris': {
        nombre: 'Cavitas Oris',
        precio: 599.00,
        descripcion: 'Tacos llamativos con colores amarillo y azul para la humildad del barrio',
        caracteristicas: [
            'Colores vibrantes',
            'Suela de alta visibilidad',
            'Material reflectante',
            'Diseño moderno y llamativo',
            'Ideal para partidos nocturnos'
        ],
        cuidados: 'Limpiar con cuidado para mantener los colores vibrantes.',
        imagenes: [
            '../images/tacos4.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'kuntur': {
        nombre: 'Kuntur',
        precio: 650.00,
        descripcion: 'La iluminación solar dando el poder que necesitas para rodar',
        caracteristicas: [
            'Colores vibrantes',
            'Suela de alta visibilidad',
            'Material reflectante',
            'Diseño moderno y llamativo',
            'Ideal para partidos nocturnos'
        ],
        cuidados: 'Limpiar con cuidado para mantener los colores vibrantes.',
        imagenes: [
            '../images/tacos5.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'mercury': {
        nombre: 'Mercury',
        precio: 650.00,
        descripcion: 'Ligero para andar como en el espacio',
        caracteristicas: [
            'Colores vibrantes',
            'Suela de alta visibilidad',
            'Material reflectante',
            'Diseño moderno y llamativo',
            'Ideal para partidos nocturnos'
        ],
        cuidados: 'Limpiar con cuidado para mantener los colores vibrantes.',
        imagenes: [
            '../images/tacos6.jpeg',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'sonic-wave': {
        nombre: 'Sonic Wave',
        precio: 650.00,
        descripcion: 'Rápidos como el sonido, con el ritmo que necesitas.',
        caracteristicas: [
            'Colores vibrantes',
            'Extremadamente ligeros',
            'Material resistente',
            'Diseño moderno y llamativo',
            'Ideal para los partidos pesados'
        ],
        cuidados: 'Limpiar con cuidado para mantener los colores vibrantes.',
        imagenes: [
            '../images/tacos7.png',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    // Velocity
    'classic': {
        nombre: 'Classic',
        precio: 12000.00,
        descripcion: 'Moto deportiva Velocity Classic con diseño oscuro y altas prestaciones.',
        caracteristicas: [
            'Motor potente de 1200cc',
            'Diseño aerodinámico',
            'Suspensión ajustable',
            'Luces LED completas',
            'Asiento deportivo ergonómico'
        ],
        cuidados: 'Mantenimiento técnico cada 5000 km y limpieza con paño húmedo.',
        imagenes: [
            '../images/moto1.jpeg',
        ],
        tallas: ['Única'],
        categoria: 'velocity'
    },

    'chapina': {
        nombre: 'Chapina',
        precio: 1200.00,
        descripcion: 'Modelo Velocity Chapina para quienes buscan estilo y velocidad urbana.',
        caracteristicas: [
            'Rendimiento ágil',
            'Colores vibrantes',
            'Frenos de disco',
            'Suspensión deportiva',
            'Pantalla digital'
        ],
        cuidados: 'Revisar nivel de aceite y limpiar regularmente.',
        imagenes: [
            '../images/moto2.jpeg',
        ],
        tallas: ['Única'],
        categoria: 'velocity'
    },

    // Accesorios

    'rodilleras': {
        nombre: 'Rodilleras',
        precio: 99.00,
        descripcion: 'Rodilleras de protección que te dan el flow perfecto para tus movimientos.',
        caracteristicas: [
            'Material acolchado de alta densidad',
            'Ajuste perfecto con velcro',
            'Protección completa de la rodilla',
            'Diseño ergonómico',
            'Transpirable y cómodo'
        ],
        cuidados: 'Lavar a mano con agua fría, secar al aire.',
        imagenes: [
            '../images/accesorios1.png',

        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'accesorios'
    },


    'pachon': {
        nombre: 'Pachon',
        precio: 50.00,
        descripcion: 'Todo lo necesario para que te mantengas lo mas hidratado posible en los entrenamientos',
        caracteristicas: [
            'Resistente a golpes',
            'Mantiene temperatura',
            'Facil de Transportar',
            'Logo TX grande',
            'Capacidad de 1.5L'
        ],
        cuidados: 'no llenar con materiales arriba de los 80C.',
        imagenes: [
            '../images/accesorios2.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'mochila-deportiva': {
        nombre: 'Mochila Tipo TX',
        precio: 150.00,
        descripcion: 'El almacenamiento nunca se te acabara cuando andes entrenando.',
        caracteristicas: [
            'Resistente al peso',
            'Con materiales impermeables',
            'Ligera',
            'Duradera',
            'Logo TX grabado'
        ],
        cuidados: 'No lavar con agua caliente',
        imagenes: [
            '../images/accesorios3.png',

        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'mochila-no-deportiva': {
        nombre: 'Mochila Tipo Wave',
        precio: 180.00,
        descripcion: 'La mochila para que nunca te haga falta el espacio donde quiera que vayas',
        caracteristicas: [
            'Diseño resistente',
            'Material impermeable',
            'Logo TX visible',
            'Ligero y durable',
        ],
        cuidados: 'No lavar con agua.',
        imagenes: [
            '../images/accesorios4.png',

        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },
    
    'muñequera': {
        nombre: 'Muñequera',
        precio: 80.00,
        descripcion: 'Muñequera que potencia tus manos y mejora tu rendimiento en cada movimiento.',
        caracteristicas: [
            'Material elástico resistente',
            'Ajuste perfecto',
            'Absorbe el sudor',
            'Logo TX bordado',
            'Cómoda para uso prolongado'
        ],
        cuidados: 'Lavar a máquina en ciclo delicado.',
        imagenes: [
            '../images/accesorios5.png',

        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },
};

// Función para obtener producto por ID
function obtenerProducto(id) {
    return productos[id] || null; // Retorna producto o null si no existe
}

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoria) {
    return Object.values(productos).filter(producto => producto.categoria === categoria); // Filtrar productos por categoría
}

// Función para obtener todos los productos
function obtenerTodosLosProductos() {
    return Object.values(productos); // Retornar todos los productos en un arreglo
}

// Filtrar productos por categoría y/o término de búsqueda
function filtrarProductos({ categoria = null, q = '' } = {}) {
    const todos = obtenerTodosLosProductos();
    return todos.filter(p => {
        const matchCategoria = categoria ? p.categoria === categoria : true;
        const texto = `${p.nombre} ${p.descripcion} ${(p.caracteristicas||[]).join(' ')}`.toLowerCase();
        const matchQ = q ? texto.includes(q.toLowerCase()) : true;
        return matchCategoria && matchQ;
    });
}

// Renderizar un conjunto de productos dentro de un contenedor
function renderizarProductos(lista, container) {
    if (!container) return;
    container.innerHTML = '';
    lista.forEach(p => {
        const article = document.createElement('article');
        article.className = 'producto';
        article.innerHTML = `
            <div>
                <img src="${p.imagenes && p.imagenes[0] ? p.imagenes[0] : '../images/placeholder.png'}" alt="${p.nombre}">
            </div>
            <div class="informacion">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion || ''}</p>
                <div class="precio">
                    <p class="dinero">A solo: Q.${p.precio.toFixed(2)}</p>
                </div>
                <button class="btn-ver-producto" onclick="window.location.href='producto.html?id=${encodeURIComponent(getProductoId(p))}'">Ver Producto</button>
            </div>
        `;
        container.appendChild(article);
    });
}

// Obtener el ID de producto (clave) dado el objeto producto (busca en el map)
function getProductoId(productoObj) {
    for (const key in productos) {
        if (productos[key] === productoObj) return key;
    }
    // fallback: usar nombre slug
    return productoObj.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// Renderizar productos por categoría dentro del primer contenedor .catalogo
function renderizarPorCategoria(categoria, selector = '.catalogo') {
    const cont = document.querySelector(selector);
    if (!cont) return;
    const lista = filtrarProductos({ categoria });
    renderizarProductos(lista, cont);
}

// Detectar contenedores .catalogo y auto-renderizar según clase cata-<categoria>
function autoRenderCatalogos() {
    document.querySelectorAll('.catalogo').forEach(cont => {
        // buscar clase como cata-equipacion -> categoria 'equipacion'
        const claseCat = Array.from(cont.classList).find(c => c.startsWith('cata-'));
        let categoria = null;
        if (claseCat) categoria = claseCat.replace('cata-', '');
        // Si dataset tiene categoria, usarla
        if (cont.dataset && cont.dataset.categoria) categoria = cont.dataset.categoria;
        const lista = categoria ? filtrarProductos({ categoria }) : obtenerTodosLosProductos();
        renderizarProductos(lista, cont);
    });
}

// Debounce helper
function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// Obtener categorías únicas desde los datos
function obtenerCategorias() {
    const s = new Set();
    Object.values(productos).forEach(p => s.add(p.categoria));
    return Array.from(s).sort();
}

// Inyectar controles de búsqueda y filtro en un contenedor .catalogo
function injectCatalogControls(container) {
    if (!container || container.querySelector('.catalog-controls')) return;
    const controls = document.createElement('div');
    controls.className = 'catalog-controls';
    controls.style.cssText = 'display:flex;gap:12px;align-items:center;margin-bottom:16px;';

    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = 'Buscar productos...';
    input.className = 'catalog-search';
    input.style.cssText = 'flex:1;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);color:inherit;';

    const select = document.createElement('select');
    select.className = 'catalog-filter';
    select.style.cssText = 'padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);color:inherit;';

    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = 'Todas las categorías';
    select.appendChild(optAll);

    obtenerCategorias().forEach(cat => {
        const o = document.createElement('option');
        o.value = cat;
        o.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        select.appendChild(o);
    });

    controls.appendChild(input);
    controls.appendChild(select);
    container.prepend(controls);

    const perform = () => {
        const q = input.value.trim();
        const cat = select.value === 'all' ? null : select.value;
        const lista = filtrarProductos({ categoria: cat, q });
        renderizarProductos(lista, container);
    };

    const deb = debounce(perform, 250);
    input.addEventListener('input', deb);
    select.addEventListener('change', perform);
}

// Auto-inject controls then render catalogs
function autoRenderCatalogosWithControls() {
    document.querySelectorAll('.catalogo').forEach(cont => {
        injectCatalogControls(cont);
        // render initial
        const claseCat = Array.from(cont.classList).find(c => c.startsWith('cata-'));
        let categoria = null;
        if (claseCat) categoria = claseCat.replace('cata-', '');
        if (cont.dataset && cont.dataset.categoria) categoria = cont.dataset.categoria;
        const lista = categoria ? filtrarProductos({ categoria }) : obtenerTodosLosProductos();
        renderizarProductos(lista, cont);
    });
}

// Re-run auto-render with controls on DOM ready
document.addEventListener('DOMContentLoaded', autoRenderCatalogosWithControls);

// Exponer funciones útiles
window.obtenerProducto = obtenerProducto;
window.obtenerProductosPorCategoria = obtenerProductosPorCategoria;
window.obtenerTodosLosProductos = obtenerTodosLosProductos;
window.filtrarProductos = filtrarProductos;
window.renderizarPorCategoria = renderizarPorCategoria;
window.renderizarProductos = renderizarProductos;

// Ejecutar auto-render si hay catalogos en la página
document.addEventListener('DOMContentLoaded', autoRenderCatalogos);