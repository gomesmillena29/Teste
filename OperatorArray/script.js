const list = [1, 2, 3, 4, 5, 6];

const newList = list.map(function (item, index) {
  return item + index;
});

console.log(newList);

const soma = list.reduce(function (total, proximo) {
  return total + proximo;
});

console.log(soma);

const find = list.find(function (item) {
  return item === 66;
});

console.log(find);
