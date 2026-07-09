// yo este archivo contiene código JavaScript con comentarios simples para aprender
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

    'equipacion-cabo-verde': {
        nombre: 'Equipación Cabo Verde',
        precio: 450.00,
        descripcion: 'La grandeza de los tiburones azules con un diseño audaz y fresco.',
        caracteristicas: [
            'Tela ligera y transpirable',
            'Ajuste ergonómico',
            'Estampado vibrante',
            'Secado rápido',
            'Ideal para uso intensivo'
        ],
        cuidados: 'Lavar a mano con agua fría y evitar el cloro.',
        imagenes: [
            '../images/Gemini_Generated_Image_behzebbehzebbehz.png',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-colombia': {
        nombre: 'Equipación Colombia',
        precio: 450.00,
        descripcion: 'Corazón cafetero donde quiera con un estilo potente y elegante.',
        caracteristicas: [
            'Material transpirable',
            'Diseño con identidad nacional',
            'Corte cómodo',
            'Ajuste atlético',
            'Ideal para competir'
        ],
        cuidados: 'Lavar en ciclo delicado y secar a la sombra.',
        imagenes: [
            '../images/Gemini_Generated_Image_taror3taror3taro.png',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-mexico': {
        nombre: 'Equipación México',
        precio: 450.00,
        descripcion: 'La armadura de los aztecas con estilo y rendimiento profesional.',
        caracteristicas: [
            'Tejido resistente',
            'Diseño llamativo',
            'Comodidad durante el juego',
            'Textura transpirable',
            'Durabilidad mejorada'
        ],
        cuidados: 'Limpiar con paño húmedo y secar al aire.',
        imagenes: [
            '../images/Gemini_Generated_Image_flcm50flcm50flcm.png',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-mexico-2': {
        nombre: 'Equipación México 2',
        precio: 450.00,
        descripcion: 'Versión alternativa de México perfecta para quienes buscan un estilo distinto.',
        caracteristicas: [
            'Material ligero',
            'Ajuste estable',
            'Estilo deportivo',
            'Buen control de temperatura',
            'Look moderno'
        ],
        cuidados: 'Lavar suavemente y secar en sombra.',
        imagenes: [
            '../images/Gemini_Generated_Image_flcm50flcm50flcm.png',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-rd-del-congo': {
        nombre: 'Equipación RD del Congo',
        precio: 400.00,
        descripcion: 'La equipación de los guerreros congoleños, fuerte y resistente.',
        caracteristicas: [
            'Material duradero',
            'Diseño emblemático',
            'Cómodo ajuste',
            'Transpirable',
            'Agarre adecuado'
        ],
        cuidados: 'Lavar a mano y dejar secar al aire libre.',
        imagenes: [
            '../images/canadaaa.jpeg',
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'equipacion-canada': {
        nombre: 'Equipación Canadá',
        precio: 400.00,
        descripcion: 'La equipación especial de los de la hoja de maple con estilo y comodidad.',
        caracteristicas: [
            'Tela resistente',
            'Ajuste deportivo',
            'Secado rápido',
            'Estilo clásico',
            'Cómoda para entrenar'
        ],
        cuidados: 'No lavar con agua caliente.',
        imagenes: [
            '../images/congouu.jpeg',
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

    'quetzalito-sports': {
        nombre: 'Quetzalito sports',
        precio: 750.00,
        descripcion: 'Lleva el color de tus raíces a donde quiera con tacos llenos de personalidad y comodidad.',
        caracteristicas: [
            'Diseño inspirado en la naturaleza',
            'Suela de gran tracción',
            'Material resistente',
            'Ajuste estable',
            'Comodidad durante todo el partido'
        ],
        cuidados: 'Limpiar con un paño húmedo y airear en un lugar seco.',
        imagenes: [
            '../images/verde.png',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'sports-grey': {
        nombre: 'Sports grey',
        precio: 750.00,
        descripcion: 'El estilo lo debes tener desde tu calzado para destacar en cada partido con elegancia sutil.',
        caracteristicas: [
            'Tonos sobrios y urbanos',
            'Material transpirable',
            'Agarre superior',
            'Ajuste contemporáneo',
            'Buena estabilidad'
        ],
        cuidados: 'Limpiar con cuidado y secar a la sombra.',
        imagenes: [
            '../images/gris.png',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'dorados-f50': {
        nombre: 'Dorados f50',
        precio: 650.00,
        descripcion: 'Juega con un estilo diferente gracias a unos tacos que combinan potencia visual y rendimiento.',
        caracteristicas: [
            'Diseño llamativo en dorado',
            'Material duradero',
            'Cómodo ajuste',
            'Suela de alto rendimiento',
            'Excelente control'
        ],
        cuidados: 'Limpiar con un paño suave y evitar el agua caliente.',
        imagenes: [
            '../images/azuldorado.png',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'jarritos': {
        nombre: 'Jarritos',
        precio: 850.00,
        descripcion: 'Juega con un calzado increíble e invidiable, con estilo atrevido y rendimiento cómodo.',
        caracteristicas: [
            'Agarre reforzado',
            'Amortiguación confortable',
            'Diseño único',
            'Material resistente',
            'Perfecto para cancha'
        ],
        cuidados: 'Limpiar con un paño húmedo y dejar secar al aire.',
        imagenes: [
            '../images/jarritos.png',
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'sky-blue': {
        nombre: 'Sky blue',
        precio: 800.00,
        descripcion: 'Diviérte con el mejor estilo de sports rain y siente la ligereza del cielo en cada paso.',
        caracteristicas: [
            'Color celeste vibrante',
            'Material suave',
            'Ajuste estable',
            'Suela blanca de alto agarre',
            'Comodidad para entrenar'
        ],
        cuidados: 'Limpiar con un paño húmedo y dejar secar naturalmente.',
        imagenes: [
            '../images/bluee.png',
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
    'reloj-inteligente': {
        nombre: 'Reloj inteligente',
        precio: 600.00,
        descripcion: 'Controla el tiempo en que entrenas con precisión y estilo.',
        caracteristicas: [
            'Cronómetro digital',
            'Diseño resistente al agua',
            'Pantalla LED',
            'Alarma y temporizador',
            'Correa ajustable'
        ],
        cuidados: 'Limpiar con un paño seco y evitar golpes fuertes.',
        imagenes: [
            '../images/reloj.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'espinilleras': {
        nombre: 'Espinilleras',
        precio: 200.00,
        descripcion: 'Protege tu integridad física con espinilleras suaves y seguras.',
        caracteristicas: [
            'Material acolchado',
            'Correas ajustables',
            'Diseño ergonómico',
            'Ligero y cómodo',
            'Fácil de limpiar'
        ],
        cuidados: 'Lavar a mano y secar en sombra.',
        imagenes: [
            '../images/espinilleras.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'toallas-especiales': {
        nombre: 'Toallas Especiales',
        precio: 120.00,
        descripcion: 'Toallas suaves y absorbentes para mantenerte seco en cada entrenamiento.',
        caracteristicas: [
            'Alta absorción',
            'Secado rápido',
            'Textura suave',
            'Ligera y compacta',
            'Diseño deportivo'
        ],
        cuidados: 'Lavar con agua fría y secar en sombra.',
        imagenes: [
            '../images/toallas.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'banda-resistencia': {
        nombre: 'Banda de resistencia',
        precio: 350.00,
        descripcion: 'Eleva tu entrenamiento con una banda de resistencia duradera y versátil.',
        caracteristicas: [
            'Material elástico de alta calidad',
            'Resistencia ajustable',
            'Fácil de transportar',
            'Resistente al desgaste',
            'Ideal para calentamiento'
        ],
        cuidados: 'No expongas al sol directo y limpia con paño seco.',
        imagenes: [
            '../images/banda.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'medias-antideslizantes': {
        nombre: 'Medias antideslizantes',
        precio: 150.00,
        descripcion: 'Haz deporte cómodamente con medias que ofrecen agarre y soporte.',
        caracteristicas: [
            'Diseño antideslizante',
            'Tejido transpirable',
            'Ajuste cómodo',
            'Corte deportivo',
            'Fáciles de lavar'
        ],
        cuidados: 'Lavar a mano y secar en sombra.',
        imagenes: [
            '../images/acc1.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'mangas-deportivas': {
        nombre: 'Mangas deportivas',
        precio: 175.00,
        descripcion: 'Práctica deporte con estilo y protección para tus brazos.',
        caracteristicas: [
            'Material transpirable',
            'Ajuste firme',
            'Protege del sol',
            'Diseño deportivo',
            'Ligera y cómoda'
        ],
        cuidados: 'Lavar con agua fría y secar al aire.',
        imagenes: [
            '../images/acc2mangas.png',
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },
};

// Función para obtener producto por ID
function obtenerProducto(id) { // yo defino una función que hace una acción específica
    return productos[id] || null; // Retorna producto o null si no existe // yo devuelvo este valor al código que llamó la función
}

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoria) { // yo defino una función que hace una acción específica
    return Object.values(productos).filter(producto => producto.categoria === categoria); // Filtrar productos por categoría // yo devuelvo este valor al código que llamó la función
}

// Función para obtener todos los productos
function obtenerTodosLosProductos() { // yo defino una función que hace una acción específica
    return Object.values(productos); // Retornar todos los productos en un arreglo // yo devuelvo este valor al código que llamó la función
}

// Filtrar productos por categoría y/o término de búsqueda
function filtrarProductos({ categoria = null, q = '' } = {}) { // yo defino una función que hace una acción específica
    const todos = obtenerTodosLosProductos(); // yo declaro todos para usarlo después
    return todos.filter(p => { // yo devuelvo este valor al código que llamó la función
        const matchCategoria = categoria ? p.categoria === categoria : true; // yo declaro matchCategoria para usarlo después
        const texto = `${p.nombre} ${p.descripcion} ${(p.caracteristicas||[]).join(' ')}`.toLowerCase(); // yo declaro texto para usarlo después
        const matchQ = q ? texto.includes(q.toLowerCase()) : true; // yo declaro matchQ para usarlo después
        return matchCategoria && matchQ; // yo devuelvo este valor al código que llamó la función
    });
}

// Renderizar un conjunto de productos dentro de un contenedor
function renderizarProductos(lista, container) { // yo defino una función que hace una acción específica
    if (!container) return; // yo verifico algo antes de continuar
    container.innerHTML = '';
    lista.forEach(p => {
        const article = document.createElement('article'); // yo declaro article para usarlo después
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
function getProductoId(productoObj) { // yo defino una función que hace una acción específica
    for (const key in productos) {
        if (productos[key] === productoObj) return key; // yo verifico algo antes de continuar
    }
    // fallback: usar nombre slug
    return productoObj.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-'); // yo devuelvo este valor al código que llamó la función
}

// Renderizar productos por categoría dentro del primer contenedor .catalogo
function renderizarPorCategoria(categoria, selector = '.catalogo') { // yo defino una función que hace una acción específica
    const cont = document.querySelector(selector); // yo declaro cont para usarlo después
    if (!cont) return; // yo verifico algo antes de continuar
    const lista = filtrarProductos({ categoria }); // yo declaro lista para usarlo después
    renderizarProductos(lista, cont);
}

// Detectar contenedores .catalogo y auto-renderizar según clase cata-<categoria>
function autoRenderCatalogos() { // yo defino una función que hace una acción específica
    document.querySelectorAll('.catalogo').forEach(cont => {
        // buscar clase como cata-equipacion -> categoria 'equipacion'
        const claseCat = Array.from(cont.classList).find(c => c.startsWith('cata-')); // yo declaro claseCat para usarlo después
        let categoria = null; // yo declaro categoria para usarlo después
        if (claseCat) categoria = claseCat.replace('cata-', ''); // yo verifico algo antes de continuar
        // Si dataset tiene categoria, usarla
        if (cont.dataset && cont.dataset.categoria) categoria = cont.dataset.categoria; // yo verifico algo antes de continuar
        const lista = categoria ? filtrarProductos({ categoria }) : obtenerTodosLosProductos(); // yo declaro lista para usarlo después
        renderizarProductos(lista, cont);
    });
}

// Debounce helper
function debounce(fn, wait) { // yo defino una función que hace una acción específica
    let t;
    return function(...args) { // yo devuelvo este valor al código que llamó la función
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// Obtener categorías únicas desde los datos
function obtenerCategorias() { // yo defino una función que hace una acción específica
    const s = new Set(); // yo declaro s para usarlo después
    Object.values(productos).forEach(p => s.add(p.categoria));
    return Array.from(s).sort(); // yo devuelvo este valor al código que llamó la función
}

// Inyectar controles de búsqueda y filtro en un contenedor .catalogo
function injectCatalogControls(container) { // yo defino una función que hace una acción específica
    if (!container || container.querySelector('.catalog-controls')) return; // yo verifico algo antes de continuar
    const controls = document.createElement('div'); // yo declaro controls para usarlo después
    controls.className = 'catalog-controls';
    controls.style.cssText = 'display:flex;gap:12px;align-items:center;margin-bottom:16px;';

    const input = document.createElement('input'); // yo declaro input para usarlo después
    input.type = 'search';
    input.placeholder = 'Buscar productos...';
    input.className = 'catalog-search';
    input.style.cssText = 'flex:1;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);color:inherit;';

    const select = document.createElement('select'); // yo declaro select para usarlo después
    select.className = 'catalog-filter';
    select.style.cssText = 'padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);color:inherit;';

    const optAll = document.createElement('option'); // yo declaro optAll para usarlo después
    optAll.value = 'all';
    optAll.textContent = 'Todas las categorías';
    select.appendChild(optAll);

    obtenerCategorias().forEach(cat => {
        const o = document.createElement('option'); // yo declaro o para usarlo después
        o.value = cat;
        o.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        select.appendChild(o);
    });

    controls.appendChild(input);
    controls.appendChild(select);
    container.prepend(controls);

    const perform = () => {
        const q = input.value.trim(); // yo declaro q para usarlo después
        const cat = select.value === 'all' ? null : select.value; // yo declaro cat para usarlo después
        const lista = filtrarProductos({ categoria: cat, q }); // yo declaro lista para usarlo después
        renderizarProductos(lista, container);
    };

    const deb = debounce(perform, 250); // yo declaro deb para usarlo después
    input.addEventListener('input', deb); // yo le digo al navegador que escuche un evento del usuario
    select.addEventListener('change', perform); // yo le digo al navegador que escuche un evento del usuario
}

// Auto-inject controls then render catalogs
function autoRenderCatalogosWithControls() { // yo defino una función que hace una acción específica
    document.querySelectorAll('.catalogo').forEach(cont => {
        injectCatalogControls(cont);
        // render initial
        const claseCat = Array.from(cont.classList).find(c => c.startsWith('cata-')); // yo declaro claseCat para usarlo después
        let categoria = null; // yo declaro categoria para usarlo después
        if (claseCat) categoria = claseCat.replace('cata-', ''); // yo verifico algo antes de continuar
        if (cont.dataset && cont.dataset.categoria) categoria = cont.dataset.categoria; // yo verifico algo antes de continuar
        const lista = categoria ? filtrarProductos({ categoria }) : obtenerTodosLosProductos(); // yo declaro lista para usarlo después
        renderizarProductos(lista, cont);
    });
}

// Re-run auto-render with controls on DOM ready
document.addEventListener('DOMContentLoaded', autoRenderCatalogosWithControls); // yo espero a que la página cargue antes de usar elementos del DOM

// Exponer funciones útiles
window.obtenerProducto = obtenerProducto;
window.obtenerProductosPorCategoria = obtenerProductosPorCategoria;
window.obtenerTodosLosProductos = obtenerTodosLosProductos;
window.filtrarProductos = filtrarProductos;
window.renderizarPorCategoria = renderizarPorCategoria;
window.renderizarProductos = renderizarProductos;

// Ejecutar auto-render si hay catalogos en la página
document.addEventListener('DOMContentLoaded', autoRenderCatalogos); // yo espero a que la página cargue antes de usar elementos del DOM
