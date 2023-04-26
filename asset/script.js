const section = document.querySelector("section");
const inputText = document.getElementById("inputText")
const button = document.querySelector("button");
const array = [];

function createPostIt() {
  const postIt = createPostItDiv();
  section.appendChild(postIt);
  const liste = addUlPostIt();
  postIt.appendChild(liste);
  const elementListe = addLiPostIt();
  postIt.appendChild(elementListe);
  
}

function createPostItDiv() {
  const postIt = document.createElement("div");
  postIt.classList.add("postIt");
  return postIt;
}
function addUlPostIt (){
    const ul = document.createElement("ul");
    ul.classList.add("liste");
    return ul;
}

function addLiPostIt (){
    const li = document.createElement("li")
    return li;

}

function addToArr() {
    const inputVal = document.getElementById("input-text").value;
    array.push(inputVal);
    console.log(array); 
  }
button.addEventListener("click",createPostIt);
