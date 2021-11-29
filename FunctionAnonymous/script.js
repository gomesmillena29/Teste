/*function adicionar(...numbers) {
  let total = numbers.reduce((total, proximo) => {
    let soma = total + proximo;
    return soma;
  });
  console.log(total);
}
adicionar(1, 2, 3, 4, 5, 8, 9);
*/
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class ListTarefas extends List {
  constructor() {
    super();
    this.nome = "Matheus;";
  }

  mostrarNome() {
    console.log(this.nome);
  }

  addTarefa() {
    this.tarefas.push("Nova Tarefa");
    console.log(this.tarefas);
  }
}

const minhasTarefas = new ListTarefas();

document.getElementById("novo").onclick = function () {
  minhasTarefas.add("Minha Tarefa");
};

minhasTarefas.mostrarNome();
