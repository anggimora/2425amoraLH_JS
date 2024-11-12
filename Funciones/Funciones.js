// contador.js

// da inicio al contador de visitantes
let contador = localStorage.getItem('contador');

// Si no hay contador, lo inicializamos en 0
if (!contador) {
    contador = 0;
}

// esto incrementa en el contador cuando alguien entre
contador++;

// Guarda el nuevo numero en localStorage
localStorage.setItem('contador', contador);

// muestra el contador
console.log(`Número de visitantes: ${contador}`);

// esto es para mostrar el contador en  HTML
function mostrarContador() {
    const contadorElemento = document.getElementById('contador');
    if (contadorElemento) {
        contadorElemento.innerText = `Número de visitantes: ${contador}`;
    }
}

// invoca funcion para enseñar contador
mostrarContador();



// reloj.js

function actualizarReloj() {
    // fecha y hora actual
    const ahora = new Date();

    //  hora en Houston (UTC-6)
    const horaHouston = new Date(ahora.toLocaleString("en-US", { timeZone: "America/Chicago" }));

    //  hora en Madrid (UTC+1)
    const horaMadrid = new Date(ahora.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));

    // Formateo de la hora revisar no se bien que es
    const opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const horaFormateadaHouston = horaHouston.toLocaleTimeString('es-ES', opciones);
    const horaFormateadaMadrid = horaMadrid.toLocaleTimeString('es-ES', opciones);

    // para enseñar la hora en el HTML
    const relojElemento = document.getElementById('reloj');
    if (relojElemento) {
        relojElemento.innerHTML = `
            <div>
                <strong>Hora en Houston:</strong> ${horaFormateadaHouston} <br>
                <strong>Hora en Madrid:</strong> ${horaFormateadaMadrid}
            </div>
        `;
    }
}

// la orden para actualizat el reloj cada segundo
setInterval(actualizarReloj, 1000);

// invocacion de la función una vez al cargar la página
actualizarReloj();



// menu.js

// Selecciona todos los enlaces del menú de navegación
const enlacesMenu = document.querySelectorAll('nav a');

// Añade un evento de mouseover y mouseout a cada enlace
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('mouseover', () => {
        // Cambia el color del texto y aumenta el tamaño de la fuente
        enlace.style.color = 'red';
        enlace.style.fontSize = '1.2em'; // aumenta de tsmsñoo
    });

    enlace.addEventListener('mouseout', () => {
        // Vuelve a poner la misma fuente y color original
        enlace.style.color = 'blue';
        enlace.style.fontSize = '1em'; // tamaño de origen
    });
});

