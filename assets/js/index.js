'use strict';
/*2. Дана таблица с юзерами с колонками Name, Email, Delete.
2.1. При нажатии на кнопку Delete запись из таблицы должна удаляться
2.2. При нажатии на запись в колонках Name или Email должен появляться input на месте текста,
 в котором его можно редактировать.
При нажатии клавиши Enter в инпуте изменения сохраняются.
2.3.  Создать два текстовых поля под таблицей, в которые можно вводить Name и Email и кнопку,
 которая добавит запись в таблицу.*/

const usersTable = document.getElementById('usersTable');
const createUserForm = document.getElementById('createUserForm');

usersTable.addEventListener("click", usersTableHandler);
createUserForm.addEventListener("submit", createUserFormHandler);

function usersTableHandler(e) {
  console.log(e.target);
  switch (e.target.tagName) {
    case "TD":
      changeUser(e);
      break;
    case "FORM":

      break;
    case "BUTTON":
      deleteField(e);
      break;
  }
}

function changeUser({ target }) {
  const fieldValue = target.innerText;
  const input = document.createElement("input");
  target.innerText = "";
  input.value = fieldValue;
  target.appendChild(input);
  input.addEventListener('keyup', inputHandler)
}

function inputHandler(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    const inputValue = e.target.value;
    const parentTd = e.target.closest('td');
    parentTd.innerText = inputValue;
    e.target.remove();
  }
}

function deleteField(e) {
  const parentTr = e.target.closest('tr');
  if (confirm('Are you sure you want to delete this user?') && parentTr) {
    parentTr.remove()
  }
}

function createUserFormHandler(e) {
  e.preventDefault();
  const formValues = new FormData(createUserForm);
  console.log(formValues)
}

function createTableRow(data) {
  const newRow = [];
  for (const [name, value] of data) {
    const tr = document.createElement('tr');
    tr.innerText = value;
    newRow.push(tr);
  }
}