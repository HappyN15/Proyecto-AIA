document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    // Usuario fijo para demostración
    const validUser = "admin";
    const validPass = "aia123";
  
    if (user === validUser && pass === validPass) {
      window.location.href = "index.html"; // redirige a la página principal
    } else {
      document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
  });
  
  async function encriptarTexto(texto) {
      const encoder = new TextEncoder();
      const data = encoder.encode(texto);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      return hashHex;
    }

    // Evento al enviar el formulario
    document.getElementById("login-form").addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevenir envío tradicional

      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contrasena").value;

      const contrasenaEncriptada = await encriptarTexto(contrasena);
      console.log("Usuario:", usuario);
      console.log("Contraseña encriptada:", contrasenaEncriptada);

      // Aquí iría el envío a una API real:
      alert("Inicio de sesión en proceso...\n(Contraseña encriptada en consola)");
      
      // Simular redirección
      window.location.href = "index.html";
    });