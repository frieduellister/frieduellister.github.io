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
      expand.classList.toggle("open");
    });
  });
}

addMobileSideMenu();
addSideMenuExpands();
