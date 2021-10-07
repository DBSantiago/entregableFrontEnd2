/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresá tu nombre");
  datosPersona.edad = 2021 - parseInt(prompt("Ingresá tu año de nacimiento"));
  datosPersona.ciudad = prompt("Ingresá tu ciudad");
  let interesJavascript = confirm("Te interesa JavaScript?");
  interesJavascript
    ? (datosPersona.interesPorJs = "Sí =)")
    : (datosPersona.interesPorJs = "No =(");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreUsuario = document.getElementById("nombre");
  let ciudadUsuario = document.getElementById("ciudad");
  let edadUsuario = document.getElementById("edad");
  let interesJavascript = document.getElementById("javascript");

  nombreUsuario.innerText = datosPersona.nombre;
  ciudadUsuario.innerText = datosPersona.ciudad;
  edadUsuario.innerText = datosPersona.edad;
  interesJavascript.innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let filaMaterias = document.getElementById("fila");
  if (filaMaterias.innerHTML === "") {
    listado.forEach((contenido) => {
      filaMaterias.innerHTML += `<div class="caja">
          <img src="${contenido.imgUrl}" alt="Logo ${contenido.lenguajes}">
          <p class = "lenguajes">${contenido.lenguajes}<p>
          <p class = "bimestre">${contenido.bimestre}</p>
      </div>`;
    });
  } else {
    alert("Ya obtuvimos las materias!");
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keypress", (event) => {
  if ((event.key === "f") | (event.key === "F")) {
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
});
