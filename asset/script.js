const createButton = document.querySelector("#createButton");

createButton.addEventListener("click", function () {
  const section = document.querySelector("section");
  const postIt = document.createElement("div");
  postIt.classList.add ("postIt")
  section.appendChild(postIt);
});
