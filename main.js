// const arrows = document.querySelectorAll(".arrow");
// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".question");
const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.addEventListener("click", (e) => {
    const answer = container.children[1];
    if (e.target.className === "arrow" || e.target.className === "question") {
      container.classList.toggle("active");
    }
    if (container.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
