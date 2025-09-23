// Carrossel dos Banners
const carousel = document.querySelector(".carousel");
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

// Animação do título
const texto = "Bem vindo ao ByteBox";
const titulo = document.querySelector(".banner-text h1");
let index = 0;
let escrevendo = true;
let velocidade = 200; // 200ms entre cada letra
let pausa = 1500; // pausa ao terminar de digitar

function animarTexto() {
    if (escrevendo) {
        titulo.textContent = texto.substring(0, index + 1);
        index++;
        if (index === texto.length) {
            escrevendo = false;
            setTimeout(animarTexto, pausa); // pausa antes de apagar
            return;
        }
    } else {
        titulo.textContent = texto.substring(0, index - 1);
        index--;
        if (index === 0) {
            escrevendo = true;
            setTimeout(animarTexto, 500); // pequena pausa antes de recomeçar
            return;
        }
    }
    setTimeout(animarTexto, velocidade);
}

animarTexto();