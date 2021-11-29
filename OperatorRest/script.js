//Exemplo simple the rest:
/* function MyList(...names) {
  console.log(names);
}

MyList("Matheus", "Lucas", "Joao");

function MyList(...numbers) {
  console.log(numbers);
}

MyList(1, 2, 3, 4, 5);
*/

function cadastrar(users, ...newUsers) {
  let totalUsers = [...users, ...newUsers];
  return console.log(totalUsers);
}

let users = ["Matheus", "Lucas", "Joao"];

let newUsers = cadastrar(users, "Henrique", "Lucas");
