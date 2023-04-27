import { addItem } from "./addItem.js";
import { deleteCheckedItems } from "./deleteCheckedItems.js";

export const myList = document.querySelector('#myList');
export const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
const deleteButton = document.querySelector('#deleteButton');
export let listItems = [];

addItem();
deleteCheckedItems();
myButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteCheckedItems);

if (localStorage.getItem('myListItems')) {
  listItems = JSON.parse(localStorage.getItem('myListItems'));
  listItems.forEach(item => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    listItem.appendChild(checkbox);
    const label = document.createElement('label');
    label.textContent = item;
    listItem.appendChild(label);
    myList.appendChild(listItem);

    label.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = label.textContent;
      listItem.replaceChild(input, label);
      input.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
          listItems[listItems.indexOf(label.textContent)] = input.value;
          label.textContent = input.value;
          listItem.replaceChild(label, input);
          localStorage.setItem('myListItems', JSON.stringify(listItems));
        }
      });
    });
  });
}
console.log (listItems);