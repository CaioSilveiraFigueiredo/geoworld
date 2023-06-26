var imagem = document.getElementById("globo");
var contadorCliques = 0;

imagem.addEventListener("click", function() {
  contadorCliques++;

  if (contadorCliques === 5) {
    ativarEasterEgg();
  }
});

function ativarEasterEgg() {
    imagem.classList.add("animacoes");
}