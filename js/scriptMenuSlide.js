// Interactividad de menús desplegables

export function setupClientMenuToggle() {
  const sidebar = document.querySelector(".topSideBar");
  const sideNav = document.querySelector(".menu_desplegable");

  if (sidebar && sideNav) {
    sidebar.addEventListener("click", () => {
      sidebar.classList.toggle("toggleSideBarClass");
      sideNav.classList.toggle("toggleSideOk");
    });
  }
}

export function setupAdminMenuToggle() {
  const adminbar = document.querySelector(".profileAdmin");
  const adminmenu = document.querySelector(".menu_administrador");

  if (adminbar && adminmenu) {
    adminbar.addEventListener("click", () => {
      adminmenu.classList.toggle("toggleSideAdmin");
    });
  }
}
