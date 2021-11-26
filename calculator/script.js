const peso;
const altura;
const imc;
const result;

function calcular() {

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  imc = peso/(altura*altura);

  if(imc < 17){
    result = document.getElementById("result");
    result.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<h3>Muito abaixo do peso <h3/>";
    document.getElementById("peso").value = "";
    document.getElementById("peso").altura = "";
    return false;
  }else if(imc > 17 && imc < 18.49){
    result = document.getElementById("result");
    result.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<h3>Cuidado voce esta Abaixo do peso <h3/> <br/>" ;
    document.getElementById("peso").value = "";
    document.getElementById("peso").altura = "";
    return false;
  }else if(imc > 18.5 && imc < 24.99){
    result = document.getElementById("result");
    result.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<h3>Otimo voce esta no peso certo! <h3/> <br/>" ;
    document.getElementById("peso").value = "";
    document.getElementById("peso").altura = "";
    return false;
  }else if(imc > 25 && imc < 29.99){
    result = document.getElementById("result");
    result.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<h3>Atencao voce esta acima do peso!<h3/> <br/>" ;
    document.getElementById("peso").value = "";
    document.getElementById("peso").altura = "";
    return false;
  }else{
    return false;
  }
}
