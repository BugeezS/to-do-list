const myList = document.querySelector('#myList');
const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
const deleteButton = document.querySelector('#deleteButton');

function addItem() {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = false;
  listItem.appendChild(checkbox);
  const label = document.createElement('label');
  label.textContent = myInput.value;
  listItem.appendChild(label);
  myList.appendChild(listItem);
  localStorage.setItem('myListItems', myList.innerHTML);
  myInput.value = '';
}

function deleteCheckedItems() {
  const checkedItems = myList.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const listItem = item.parentNode;
    myList.removeChild(listItem);
    localStorage.setItem('myListItems', myList.innerHTML);
  });
}

myButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteCheckedItems);
if (localStorage.getItem('myListItems')) {
  myList.innerHTML = localStorage.getItem('myListItems');
}
