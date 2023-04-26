const myList = document.querySelector('#myList');
const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
const deleteButton = document.querySelector('#deleteButton');
let listItems = [];

export function addItem() {
  listItems.push(myInput.value);
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = false;
  listItem.appendChild(checkbox);
  const label = document.createElement('label');
  label.textContent = listItems[listItems.length - 1];
  listItem.appendChild(label);
  myList.appendChild(listItem);
  localStorage.setItem('myListItems', JSON.stringify(listItems));
  myInput.value = '';

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
}

function deleteCheckedItems() {
  const checkedItems = myList.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const listItem = item.parentNode;
    const index = listItems.indexOf(listItem.querySelector('label').textContent);
    listItems.splice(index, 1);
    myList.removeChild(listItem);
    localStorage.setItem('myListItems', JSON.stringify(listItems));
  });
}

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