// ======== VALIDACIÓN Y GUARDADO DE CONTACTO =========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("txtEmail").value.trim();
    const telefono = document.getElementById("txtTelefono").value.trim();
    const fecha = document.getElementById("txtFecha").value.trim();

    const expresion =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // === Validaciones ===
    if (!expresion.test(correo)) {
      alert("❌ El correo ingresado no es válido.");
      return;
    }

    if (telefono.length !== 10 || isNaN(telefono)) {
      alert("❌ El teléfono debe tener 10 dígitos numéricos.");
      return;
    }

    // === Guardar datos ===
    const contacto = {
      email: correo,
      telefono: telefono,
      fecha: fecha,
    };
    localStorage.setItem("contacto_usuario", JSON.stringify(contacto));

    alert("✅ Datos de contacto guardados correctamente.");
    window.location.href = "FormContactoEnviado.html";
  });
});
