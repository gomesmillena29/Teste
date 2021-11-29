function cadastroPessoa(info) {
  let novosDados = {
    ...info,
    cargo: "Programador",
    status: 1,
    codigo: "054643187",
  };
  return novosDados;
}

cadastroPessoa({ nome: "Matheus", sobrenome: "Fraga", anoInicio: 2045 });
