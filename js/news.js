document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const fullText = this.closest(".news-article").querySelector(".news-body.full");

      if (fullText.classList.contains("hidden")) {
        fullText.classList.remove("hidden");
        this.textContent = "Weniger anzeigen"; // "Show Less"
      } else {
        fullText.classList.add("hidden");
        this.textContent = "Mehr lesen"; // "Read More"
      }
    });
  });
});