window.addEventListener('scroll', atualizarNavbar);
window.addEventListener('resize', atualizarNavbar);
document.addEventListener('DOMContentLoaded', atualizarNavbar); // Garante que o estilo seja aplicado ao carregar a página

function atualizarNavbar() {
    var containerH = document.getElementById('menuNav');
    var containerH2 = document.getElementById('headerr');
    var larguraTela = window.innerWidth;
    var scrolled = window.scrollY > 1;

    if (larguraTela <= 992) {
        // Para telas menores ou iguais a 992px, fundo sempre preto
        containerH.style.backgroundColor = "#000000";
    } else {
        // Para telas maiores que 992px, depende do scroll
        containerH.style.backgroundColor = scrolled ? "#000000" : "transparent";
    }

    // Mostrar ou esconder o headerr baseado no scroll (independente da largura)
    containerH2.style.display = scrolled ? 'none' : 'block';
}
