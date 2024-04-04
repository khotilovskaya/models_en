document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__menu").classList.add("active");
})
document.querySelector(".header__btn-close").addEventListener("click", function() {
  document.querySelector(".header__menu").classList.remove("active");
})
