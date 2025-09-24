// Carrossel dos Banners
const carousel = document.querySelector("#carousel");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        let index = dot.getAttribute("data-index");
        carousel.style.transform = `translateX(-${index * 100}%)`;

        // Atualiza o "active"
        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
    });
});
