var path = document.querySelector(".faq-button");
var description = document.querySelector(".faq__question-description");

path.addEventListener("click", function () {
    path.classList.toggle("faq-button--active");
    description.classList.toggle("faq__question-description--active");
});