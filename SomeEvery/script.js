// Some Every

/*
let nomes = ["Matheus", "Lucas", "Henrique"];

console.log(nomes.some((nome) => nome === "Maria"));
*/
let nomes = [
  { nome: "Matheus", idade: 18 },
  { nome: "Maria", idade: 25 },
  { nome: "Henrique", idade: 31 },
];
console.log(nomes.every((nome) => nome.idade >= 18));

if (nomes.every((nome) => nome.idade >= 28)) {
  console.log("TODOS SÃO MAIORES DE 18");
} else {
  console.log("OPS ALGUÉM É DE MENOR");
}
