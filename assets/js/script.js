// filter
var all = document.getElementById("all");
var web = document.getElementById("web");
var graphic = document.getElementById("graphic");
var flat = document.getElementById("flat");
var column = document.getElementsByClassName("column");
all.addEventListener("click", () => {
  for (i = 0; i < column.length; i++) {
    if (!column[i].classList.contains('column-show'))
      column[i].className += " column-show";
  }
  all.className = "activeCta";
  web.className = "";
  graphic.className = "";
  flat.className = "";
})
web.addEventListener("click", () => {
  for (i = 0; i < column.length; i++) {
    if (!column[i].classList.contains('web')) {
      column[i].classList.remove('column-show');
    } else {
      column[i].className += " column-show";
    }
  }
  all.className = "";
  web.className = "activeCta";
  graphic.className = "";
  flat.className = "";
})
graphic.addEventListener("click", () => {
  for (i = 0; i < column.length; i++) {
    if (!column[i].classList.contains('graphic')) {
      column[i].classList.remove('column-show');
    } else {
      column[i].className += " column-show";
    }
  }
  all.className = "";
  web.className = "";
  graphic.className = "activeCta";
  flat.className = "";
})
flat.addEventListener("click", () => {
  for (i = 0; i < column.length; i++) {
    if (!column[i].classList.contains('flat')) {
      column[i].classList.remove('column-show');
    } else {
      column[i].className += " column-show";
    }
  }
  all.className = "";
  web.className = "";
  graphic.className = "";
  flat.className = "activeCta";
})

//hamburger
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", cross);

function cross() {
  hamburger.classList.toggle("active");
  var ham = document.getElementById("main-hamburger");
  ham.classList.toggle("topmenu");
}
