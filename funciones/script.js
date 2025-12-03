//Funcionalidades


// Inicio 
/*const URL_INICIO = '../datos/informacion.json'; 

async function cargarInicio() {
  try {
    const respuesta = await fetch(URL_INICIO);
    const data = await respuesta.json();

    const inicio = data['primera-parte']; 
    const contenedor = document.getElementById('hero');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<img src='" + inicio['img-hero'] + "' alt='Ilustración'>" +
      "<h1>" + inicio.titular + "</h1>" +
      "<h4>" + inicio.categoria + "</h4>" +
      "<p>" + inicio['frase-descriptiva'] + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarInicio); */

const URL_INICIO = '../datos/informacion.json'; 

async function cargarInicio() {
  try {
    const respuesta = await fetch(URL_INICIO);
    const data = await respuesta.json();

    const inicio = data['primera-parte'];

    // Rellenar elementos existentes en el HTML
    //document.getElementsByClassName('hero-img')[0].src = inicio['img-hero'];
    document.getElementsByClassName('hero-titulo')[0].textContent = inicio.titular;
    //document.getElementsByClassName('hero-categoria')[0].textContent = inicio.categoria;
    document.getElementsByClassName('hero-descripcion')[0].textContent = inicio['frase-descriptiva'];

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarInicio);




//Leyendas

const URL_LeyendaMito = '../datos/leyendas-mitos.json'; 

async function cargarLeyenMito() {
  try {
    const respuesta = await fetch(URL_LeyendaMito);
    const data = await respuesta.json();

    // Leyendas Místicas
    const primer = data["leyendas-misticas"][0];
    document.getElementsByClassName('titulo-mistica')[0].textContent = primer.titulo;
    document.getElementsByClassName('masa-texto-mistica')[0].textContent = primer["masa-texto"];
    document.getElementsByClassName('imagenLM-mistica')[0].src = primer["img-leyenda"];

    // Leyendas Sagradas
    const segundo = data["leyendas-sagradas"][0]; // índice 0
    document.getElementsByClassName('titulo-sagrada')[0].textContent = segundo.titulo;
    document.getElementsByClassName('masa-texto-sagrada')[0].textContent = segundo["masa-texto"];
    document.getElementsByClassName('imagenLM-sagrada')[0].src = segundo["img-leyenda"];

    // Leyendas Historicas
    const tercer = data["leyendas-historicas"][0]; 
    document.getElementsByClassName('titulo-historicas')[0].textContent = tercer.titulo;
    document.getElementsByClassName('masa-texto-historicas')[0].textContent = tercer["masa-texto"];
    document.getElementsByClassName('imagenLM-historicas')[0].src = tercer["img-leyenda"];

  } catch (error) {
    console.error("Error al cargar la información:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarLeyenMito); 




//MITOS

async function cargarMitos() {
  try {
    const respuesta = await fetch(URL_LeyendaMito);
    const data = await respuesta.json();

    // MITOS Místicos
    const mm1 = data["mitos-misticos"][0];
    const seccion1 = document.querySelectorAll(".m_mistica")[0];
    seccion1.querySelector("h2").textContent = mm1.titulo;
    seccion1.querySelector("p").textContent = mm1["masa-texto"];
    seccion1.querySelector("img").src = mm1["img-leyenda"];

    // MITOS Sagrados
    const mm2 = data["mitos-sagrados"][0];
    const seccion2 = document.querySelectorAll(".m_mistica")[1];
    seccion2.querySelector("h2").textContent = mm2.titulo;
    seccion2.querySelector("p").textContent = mm2["masa-texto"];
    seccion2.querySelector("img").src = mm2["img-leyenda"];

    // MITOS Históricos
    const mm3 = data["mitos-historicos"][0];
    const seccion3 = document.querySelector(".m_historica");
    seccion3.querySelector("h2").textContent = mm3.titulo;
    seccion3.querySelector("p").textContent = mm3["masa-texto"];
    seccion3.querySelector("img").src = mm3["img-leyenda"];

  } catch (error) {
    console.error("Error al cargar Mitos:", error);
  }
}




// PERFIL 

// Aqui se esta cargando el archivo json
fetch('../datos/perfil.json')
  .then(res => res.json())
  .then(datos => {
    const botones = document.querySelectorAll('.filtro');
    const lista = document.getElementById('lista');

    // Si no hay lista (por ejemplo en otras páginas), no hacemos nada
    if (!lista) return;

    botones.forEach(btn => {
      btn.addEventListener('click', () => {
        const tipo = btn.dataset.tipo;
        lista.innerHTML = '';
        datos[tipo].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          lista.appendChild(li);
        });
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  // Para editar el nombre y la descripcion 
  const btnEditarTexto = document.getElementById('editarTexto');
  const nombreUsuario = document.getElementById('nombreUsuario');
  const descripcion = document.getElementById('descripcion');

  if (btnEditarTexto && nombreUsuario && descripcion) {
    btnEditarTexto.addEventListener('click', () => {
      const nuevoNombre = prompt('Nuevo nombre:', nombreUsuario.textContent);
      const nuevaDesc = prompt('Nueva descripción:', descripcion.textContent);

      if (nuevoNombre) nombreUsuario.textContent = nuevoNombre;
      if (nuevaDesc) descripcion.textContent = nuevaDesc;
    });
  }

  // Para cambiar imagen desde archivos del escritorio
  const inputImagen = document.getElementById('inputImagen');
  const btnEditarImagen = document.getElementById('editarImagen');
  const avatar = document.getElementById('avatar');

  if (inputImagen && btnEditarImagen && avatar) {
    btnEditarImagen.addEventListener('click', () => {
      inputImagen.click();
    });

    inputImagen.addEventListener('change', () => {
      const archivo = inputImagen.files[0];
      if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
          avatar.src = e.target.result;
        };
        lector.readAsDataURL(archivo);
      }
    });
  }
});




// Sobre proyecto
//const URL_PROY = '../datos/sobre-proyecto.json'; 

/*async function cargarProyecto() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.sobreProyecto;
    const contenedor = document.getElementById('sobre-proyecto');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<h2>" + proy.nombre + "</h2>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarProyecto);*/

const URL_PROY = '../datos/sobre-proyecto.json';

async function cargarProyecto() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    // Obtenemos los datos del proyecto
    const proy = data.sobreProyecto;

    // Referencia al contenedor existente
    const seccion = document.getElementById('sobre-proyecto');

    // Modificamos directamente los elementos existentes
    seccion.querySelector('h1').textContent = proy.titulo;
    seccion.querySelector('h2').textContent = proy.nombre;
    seccion.querySelector('p').textContent = proy.descripcion;

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarProyecto);




// Creditos
//const URL_PROY = '../datos/sobre-proyecto.json'; 

/*async function cargarCreditos() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.creditos;
    const contenedor = document.getElementById('creditos');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarCreditos);*/

document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById('btn-menu');
  const menuDesplegable = document.getElementById('menu-desplegable');
  const btnCerrar = document.getElementById('cerrar-menu');

  if (!btnMenu || !menuDesplegable || !btnCerrar) return;

  btnMenu.addEventListener('click', () => {
    menuDesplegable.classList.add('menu_abierto');
  });

  btnCerrar.addEventListener('click', () => {
    menuDesplegable.classList.remove('menu_abierto');
  });

  menuDesplegable.addEventListener('click', (e) => {
    if (e.target === menuDesplegable) {
      menuDesplegable.classList.remove('menu_abierto');
    }
  });
});



//const URL_PROY = '../datos/sobre-proyecto.json';

async function cargarCreditos() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    // Tomamos el objeto de créditos
    const proy = data.creditos;

    // Referencia al contenedor
    const seccion = document.getElementById('creditos');

    // Insertamos el título y descripción directamente
    seccion.querySelector('h2').textContent = proy.titulo;
    seccion.querySelector('p').textContent = proy.descripcion;

  } catch (error) {
    console.error("Error al cargar los créditos:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarCreditos);

