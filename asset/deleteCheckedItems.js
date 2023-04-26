import { myList, listItems } from "./script.js";


export function deleteCheckedItems() {
  const checkedItems = myList.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const listItem = item.parentNode;
    const index = listItems.indexOf(listItem.querySelector('label').textContent);
    listItems.splice(index, 1);
    myList.removeChild(listItem);
    localStorage.setItem('myListItems', JSON.stringify(listItems));
  });
}
