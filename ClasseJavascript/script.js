class People {
  constructor() {
    (this.nome = ""), (this.sobrenome = "");
  }

  namePeople(primaryname) {
    this.nome = primaryname;
    console.log("Meu nome eh:" + this.nome);
  }

  secoundName(secoundname) {
    this.sobrenome = secoundname;
    console.log("Meu sobrenome eh:" + this.sobrenome);
  }
  nomeCompleto() {
    let nomeCompleto = this.nome + "" + this.sobrenome;
    console.log(nomeCompleto);
  }
}

let people1 = new People();
people1.namePeople("Matheus");
people1.secoundName("Fraga");
people1.nomeCompleto();
