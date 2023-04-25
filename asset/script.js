const createButton = document.querySelector("#createButton");
const section = document.querySelector("section");

createButton.addEventListener("click", createPostIt);

function createPostIt() {
  const postIt = createPostItDiv();
  section.appendChild(postIt);
  const btnPostIt = createPostItButton();
  postIt.appendChild(btnPostIt);
  btnPostIt.addEventListener("click", createPostItInputText);
  const listePostIt = createPostItUl(postIt);
  postIt.appendChild(listePostIt);
}

function createPostItDiv() {
  const postIt = document.createElement("div");
  postIt.classList.add("postIt");
  return postIt;
}

function createPostItButton() {
  const btnPostIt = document.createElement("input");
  btnPostIt.setAttribute("type", "button");
  btnPostIt.setAttribute("id", "btnPostIt");
  return btnPostIt;
}

function createPostItInputText() {
  const inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "postItInputText");
  const postIt = this.parentNode;
  postIt.appendChild(inputText);
}

function createPostItUl(postIt) {
  const liste = document.createElement("ul");
  liste.classList.add("liste");
  return liste;
}




  




