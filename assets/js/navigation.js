function addMobileSideMenu() {
  let header = document.querySelector(".header");
  let navigation = header.querySelector(".navigation");
  let openNavigationButton = header.querySelector(".button-open-navigation");
  let closeNavigationButton = header.querySelector(".button-close-navigation");

  openNavigationButton.addEventListener("click", () => {
    navigation.classList.add("open");
    header.classList.add("navigation-open");
    openNavigationButton.classList.add("hidden");
    closeNavigationButton.classList.remove("hidden");
  });

  closeNavigationButton.addEventListener("click", () => {
    navigation.classList.remove("open");
    header.classList.remove("navigation-open");
    openNavigationButton.classList.remove("hidden");
    closeNavigationButton.classList.add("hidden");
  });
}

function addSideMenuExpands() {
  let expands = document.querySelectorAll(".nav-expand");

  expands.forEach((expand) => {
    let expandToggle = expand.querySelector(".nav-expand-toggle");

    expandToggle.addEventListener("click", () => {
      let open = expand.classList.toggle("open");
      expandToggle.setAttribute("aria-expanded", open);
    });
  });
}

function markCurrentPage() {
  let links = document.querySelectorAll(".navigation a");

  links.forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.setAttribute("aria-current", "page");

      let expand = link.closest(".nav-expand");
      if (expand) {
        expand.querySelector(".nav-expand-toggle").classList.add("nav-current-parent");
      }
    }
  });
}

addMobileSideMenu();
addSideMenuExpands();
markCurrentPage();
