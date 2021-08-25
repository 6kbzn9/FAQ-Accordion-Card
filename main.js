// const arrows = document.querySelectorAll(".arrow");
// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".question");
const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.addEventListener("click", (e) => {
    if (e.target.className === "arrow" || e.target.className === "question") {
      container.classList.toggle("active");
    }
  });
});
