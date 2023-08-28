const menu = document.querySelector(".menu");
const paragraph = document.querySelector(".menu p");
const icon = document.querySelector(".menu .arrow");
const listeEl = document.querySelector(".listes");
const liEl = document.querySelectorAll(".listes li");

menu.addEventListener("click", toggleEl);

function toggleEl() {
  listeEl.classList.toggle("show");
  menu.classList.toggle("rotate");
}

liEl.forEach((li) => {
  li.addEventListener("click", () => {
    paragraph.innerHTML = li.innerHTML;
    listeEl.classList.toggle("show");
    menu.classList.toggle("rotate");
  });
});
