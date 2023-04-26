const myList = document.querySelector('#myList');
const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
const deleteButton = document.querySelector('#deleteButton');

function deleteCheckedItems() {
  const checkedItems = myList.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const listItem = item.parentNode;
    myList.removeChild(listItem);
  });
}

myButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteCheckedItems);
