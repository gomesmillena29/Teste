const total = 0;

function criarBalao() {
  const bubble = document.createElement("div");
  bubble.setAttribute("class", "balao");

  const x = Math.floor(Math.random() * 600);
  const y = Math.floor(Math.random() * 400);

  bubble.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
  bubble.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(bubble);
}

function estourar(objeto) {
  document.body.removeChild(objeto);

  total++;
  const score = document.getElementById("total");
  score.innerHTML = "Baloes estourados: " + total;
}

function loadingGame() {
  setInterval(criarBalao, 1000);
}
