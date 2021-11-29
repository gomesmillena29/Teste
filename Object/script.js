// Car

function Car() {
  this.marca = "VolksWagen";
  this.nome = "Gol";
  this.ano = "2019";
  this.potencia = "110cv";
  this.velocidadeAtual = 0;

  this.ligar = function () {
    console.log(this.nome + "agora esta ligado...");
  };
  this.andar = function (velocidade) {
    console.log("Carro andando...");
    this.velocidadeAtual = this.velocidadeAtual = velocidade;
  };

  this.parar = function (parar) {
    console.log("Carro parado");
    this.velocidadeAtual = 0;
  };
}

const car1 = new Car();
car1.potencia = "180cv";

const car2 = new Car();
car2.ano = "2015";
car2.ano = "Saveiro";
car2.potencia = "90cv";
