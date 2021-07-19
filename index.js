function myFunction() {

  document.querySelector(".icon").classList.toggle("icon-opa");

  x = document.querySelectorAll(".nav-item");

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("responsive");
  }

  document.querySelector(".nav-item1").classList.toggle("responsive");
}
