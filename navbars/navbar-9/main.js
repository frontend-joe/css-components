const nav = document.querySelector("nav"),
  menu = document.querySelector(".menu"),
  submenu = document.querySelector(".submenu"),
  submenus = document.querySelectorAll(".submenu > div");

const onMenuHover = (element) => {
  submenus.forEach((s) => s.classList.remove("visible"));

  const selectedSubmenu = document.querySelector(
    `.submenu-${element.innerText.toLowerCase()}`,
  );

  if (!selectedSubmenu) return;

  selectedSubmenu.classList.add("visible");

  const liRect = element.getBoundingClientRect();
  submenu.style.translate = `${liRect.x - 24}px 0`;

  submenu.classList.add("open");
};

menu.addEventListener("mouseover", (e) => {
  const item = e.target.closest("li");
  if (item) onMenuHover(item);
});

menu.addEventListener("mouseleave", () => {
  submenu.classList.remove("open");
});
