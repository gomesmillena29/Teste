const div = document.querySelector("#repo");
const listElement = document.querySelector("repo ul");

const repositorios = [];

buscaRepo = async () => {
  const input = document.querySelector("#input");
  if (input.value === "") {
    alert("Insira um nome abaixo!");
    return;
  }

  const hasRepo = repositorios.find((repo) => repo.full_name === input.value);

  if (hasRepo) {
    alert("Este repositorio ja esta na lista!");
    return;
  }

  const response = await fetch(`https://api.github.com/repos/${input.value}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      repositorios.push(json);
      input.value = "";
      renderRepos();
    });
};

function renderRepos() {
  listElement.innerHTML = "";
  for (repo of repositorios) {
    let repoElement = document.createElement("li");
    repoElement.setAttribute("style", "text-decoration: nome; list-style:none;");

    let avatarElement = document.createElement("img");
    avatarElement.src = respo.owner.avatar_url;
    avatarElement.setAttribute("style", "width:24px; height:24px; border-radius:12px");

    let linkElement = document.createElement("button");
    linkElement.textContent = "Excluir";

    let posicao = repositorios.indexOf(repo);

    linkElement.setAttribute("onclick", "deletarRepo()");

    let name = document.createTextNode(repo.full_name);
    repoElement.appendChild(name);
    repoElement.appendChild(avatarElement);
    repoElement.appendChild(linkElement);
    listElement.appendChild(repoElement);
  }
}

function deletarRepo(posicao) {
  repositorios.splice(posicao, 1);
  renderRepos();
}
