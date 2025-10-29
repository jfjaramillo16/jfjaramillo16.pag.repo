$(document).ready(function () {
  // ======= EFECTOS VISUALES (originales) =======
  $(".contenedor-formularios")
    .find("input, textarea")
    .on("keyup blur focus", function (e) {
      var $this = $(this),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        } else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }
    });

  $(".tab a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    target = $(this).attr("href");
    $(".contenido-tab > div").not(target).hide();
    $(target).fadeIn(600);
  });

  // ======= GUARDAR REGISTRO =======
  const formRegistro = document.querySelector("#registrarse form");
  if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
      e.preventDefault();

      const registro = {
        nom: this.nom.value,
        ape: this.ape.value,
        usu: this.usu.value,
        ema: this.ema.value,
        pas: this.pas.value,
        tel: this.tel.value,
        empre: this.empre.value,
        fech: this.fech.value
      };

      localStorage.setItem("registro_usuario", JSON.stringify(registro));
      alert("✅ Usuario registrado correctamente en el navegador.");
      this.reset();
    });
  }

  // ======= VALIDAR LOGIN =======
  const formLogin = document.forms["FormaLogin"];
  if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = this.usuario.value.trim();
      const clave = this.clave.value.trim();
      const registro = JSON.parse(localStorage.getItem("registro_usuario"));

      if (registro && registro.usu === usuario && registro.pas === clave) {
        alert(`Bienvenido, ${registro.nom} ${registro.ape}`);
        localStorage.setItem("usuario_actual", usuario);
        window.location.href = "../index.html";
      } else {
        alert("❌ Usuario o contraseña incorrectos");
      }
    });
  }
});
