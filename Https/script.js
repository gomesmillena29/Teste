//https://sujeitoprogramador.com/rn-api/?api=posts

const listElement = document.querySelector("#app");
const posts = [];
const post = any;

function nutriApp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts");
  .then(r => r.json())
  .then(json =>{
    posts = json;
    console.log(posts)

    for(post of posts){
      const titleElement = document.createElement("li");
      const title = document.createTextNode(post.titulo);

      const imgElement = document.createElement("img");
      imgElement.src = post.capa;
      imgElement.style = "width: 50px; height:50px";


      titleElement.appendChild(title);
      listElement.appendChild(imgElement);
      listElement.appendChild(titleElement);
    }

  })
}

nutriApp();
