const createButton = document.querySelector("#createButton");
const section = document.querySelector("section");

// Button who create the postIt div
createButton.addEventListener("click", function () {
  const postIt = document.createElement("div");
  postIt.classList.add("postIt");
  section.appendChild(postIt);
  const btnPostIt = document.createElement("input");
  postIt.appendChild(btnPostIt);
  btnPostIt.setAttribute("type", "button");
  btnPostIt.setAttribute("id", "btnPostIt");
});
