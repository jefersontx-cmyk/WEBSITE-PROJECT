// yo este archivo contiene código JavaScript con comentarios simples para aprender
document.addEventListener('DOMContentLoaded', () => { // yo espero a que la página cargue antes de usar elementos del DOM
    const elementosAnimados = document.querySelectorAll('[data-animate]'); // yo declaro elementosAnimados para usarlo después

    if ('IntersectionObserver' in window) { // yo verifico algo antes de continuar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // yo verifico algo antes de continuar
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elementosAnimados.forEach(el => observer.observe(el));
    } else { // yo verifico algo antes de continuar
        elementosAnimados.forEach(el => el.classList.add('is-visible'));
    }

    const inputBuscar = document.getElementById('input-buscar'); // yo declaro inputBuscar para usarlo después
    const formBuscador = document.getElementById('buscador-form'); // yo declaro formBuscador para usarlo después
    const resultados = document.getElementById('resultados-busqueda'); // yo declaro resultados para usarlo después

    if (!inputBuscar || !formBuscador || !resultados) return; // yo verifico algo antes de continuar

    const fuenteProductos = (typeof productos !== 'undefined' && productos)
        || (window.productos || globalThis.productos || {});

    const productosCatalogo = Object.entries(fuenteProductos)
        .map(([id, producto]) => ({ id, ...producto }))
        .filter(producto => producto && producto.nombre);

    const normalizar = (texto = '') => texto.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // yo declaro normalizar para usarlo después

    let buscadorActivo = false; // yo declaro buscadorActivo para usarlo después

    const activarBuscador = () => {
        buscadorActivo = true;
        resultados.classList.add('is-active');
        renderizarResultados(inputBuscar.value);
    };

    const desactivarBuscador = () => {
        if (!inputBuscar.value.trim()) { // yo verifico algo antes de continuar
            buscadorActivo = false;
            resultados.classList.remove('is-active');
            resultados.innerHTML = '';
        }
    };

    const renderizarResultados = (consulta = '') => {
        const texto = normalizar(consulta).trim(); // yo declaro texto para usarlo después

        if (!buscadorActivo) { // yo verifico algo antes de continuar
            resultados.innerHTML = '';
            return; // yo devuelvo este resultado
        }

        if (!texto) { // yo verifico algo antes de continuar
            resultados.innerHTML = '<p class="resultado-vacio">Escribe para buscar productos en el catálogo.</p>';
            return; // yo devuelvo este resultado
        }

        const filtrados = productosCatalogo.filter(producto => {
            const textoProducto = [
                producto.nombre,
                producto.descripcion,
                producto.categoria,
                ...(producto.caracteristicas || [])
            ].join(' ');
            const hayCoincidencia = normalizar(textoProducto).includes(texto); // yo declaro hayCoincidencia para usarlo después
            const empiezaCon = normalizar(producto.nombre).startsWith(texto); // yo declaro empiezaCon para usarlo después
            return hayCoincidencia || empiezaCon; // yo devuelvo este valor al código que llamó la función
        }).sort((a, b) => {
            const aInicio = normalizar(a.nombre).startsWith(texto) ? -1 : 0; // yo declaro aInicio para usarlo después
            const bInicio = normalizar(b.nombre).startsWith(texto) ? -1 : 0; // yo declaro bInicio para usarlo después
            return aInicio - bInicio; // yo devuelvo este valor al código que llamó la función
        }).slice(0, 8);

        if (!filtrados.length) { // yo verifico algo antes de continuar
            resultados.innerHTML = '<p class="resultado-vacio">No se encontraron productos con ese término. Prueba con otra palabra como “tacos”, “equipación” o “accesorio”.</p>';
            return; // yo devuelvo este resultado
        }

        resultados.innerHTML = filtrados.map(producto => `
            <article class="resultado-item">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion || 'Producto disponible en el catálogo'}</p>
                    <span class="resultado-meta">${producto.categoria || 'producto'}</span>
                </div>
                <div class="resultado-actions">
                    <strong>Q.${Number(producto.precio || 0).toFixed(2)}</strong>
                    <a href="HTML/producto.html?id=${producto.id}" class="btn-ver-producto">Ver</a>
                </div>
            </article>
        `).join('');
    };

    formBuscador.addEventListener('submit', (event) => { // yo le digo al navegador que escuche un evento del usuario
        event.preventDefault();
        activarBuscador();
    });

    inputBuscar.addEventListener('focus', activarBuscador); // yo le digo al navegador que escuche un evento del usuario
    inputBuscar.addEventListener('input', () => { // yo le digo al navegador que escuche un evento del usuario
        activarBuscador();
        renderizarResultados(inputBuscar.value);
    });
    inputBuscar.addEventListener('blur', () => { // yo le digo al navegador que escuche un evento del usuario
        window.setTimeout(desactivarBuscador, 150);
    });
});
