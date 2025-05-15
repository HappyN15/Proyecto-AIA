
  // Simulación de una API que retorna miembros del equipo
  const miembrosEquipo = [
    {
      nombre: "Ing. María Isabela Ronquillo",
      puesto: "Presidenta AIA",
      imagen: "img/Marquillo.jpg"
    },
    {
      nombre: "Ing. José Domingo Pereda Alva",
      puesto: "Presidente del grupo CAGE",
      imagen: "img/Jose.png"
    },
    {
      nombre: "Lic. Francisco Javier Calderón Rodríguez",
      puesto: "Juez Federal Laboral",
      imagen: "img/Francisco.jpg"
    }
  ];

  // Función para renderizar los miembros en el DOM
  function mostrarMiembros() {
    const contenedor = document.getElementById("equipo-contenedor");

    // Validación por si el contenedor no existe
    if (!contenedor) {
      console.error("El contenedor 'equipo-contenedor' no existe en el HTML.");
      return;
    }

    miembrosEquipo.forEach(miembro => {
      const div = document.createElement("div");
      div.className = "equipo-miembro";

      div.innerHTML = `
        <img src="${miembro.imagen}" alt="${miembro.nombre}" onerror="this.src='img/default.jpg'">
        <h3>${miembro.nombre}</h3>
        <p>${miembro.puesto}</p>
      `;

      contenedor.appendChild(div);
    });
  }

  // Ejecutar la función al cargar la página
  document.addEventListener("DOMContentLoaded", mostrarMiembros);

