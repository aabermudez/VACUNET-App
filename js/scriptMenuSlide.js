document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".topSideBar");
  const sideNav = document.querySelector(".menu_desplegable");

  if (sidebar && sideNav) {
    sidebar.addEventListener("click", () => {
      sidebar.classList.toggle("toggleSideBarClass");
      sideNav.classList.toggle("toggleSideOk");
    });
  }
});
