import { listItems, myInput, myList } from "./script.js";

export function addItem() {
  listItems.push(myInput.value);
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  listItem.appendChild(checkbox);
  const label = document.createElement("label");
  label.textContent = listItems[listItems.length - 1];
  listItem.appendChild(label);
  myList.appendChild(listItem);
  localStorage.setItem("myListItems", JSON.stringify(listItems));
  myInput.value = "";

  label.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = label.textContent;
    listItem.replaceChild(input, label);
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        listItems[listItems.indexOf(label.textContent)] = input.value;
        label.textContent = input.value;
        listItem.replaceChild(label, input);
        localStorage.setItem("myListItems", JSON.stringify(listItems));
      }
    });
  });
}
