// componentLoader.js
import { setupClientMenuToggle, setupAdminMenuToggle } from "/js/scriptMenuSlide.js";

document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  const menuClientPlaceholder = document.getElementById("desplegableCliente-placeholder");

  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => {
      footerPlaceholder.innerHTML = data;
    })
    .catch(err => console.error("No se pudo cargar el footer:", err));

  fetch("/components/menuCliente.html")
    .then(res => res.text())
    .then(data => {
      menuClientPlaceholder.innerHTML = data;

      // Esperamos un ciclo de event loop para asegurarnos de que el DOM esté actualizado
      setTimeout(setupClientMenuToggle, 0);
    })
    .catch(err => console.error("No se pudo cargar el menú del cliente:", err));

  // Si tu menú administrador también se inyecta dinámicamente, hazlo igual que arriba
  // Si está en el HTML principal, puedes llamarlo directamente
  setTimeout(setupAdminMenuToggle, 0);
});
