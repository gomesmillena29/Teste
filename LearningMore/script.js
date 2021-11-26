function open() {
  const area = document.getElementById("area");
  const texto = prompt("Digite seu nome!");

  if (texto == "" || texto == null) {
    alert("Digite seu nome novamente!");
    area.innerHTML = "Welcome..";
  } else {
    area.innerHTML = "Bem Vindo" + texto;
  }
}

function open2(name) {
  const area = document.getElementById("area");
  const texto = prompt("Digite seu sobrenome!");
  area.innerHTML = nome + " " + texto;
}
