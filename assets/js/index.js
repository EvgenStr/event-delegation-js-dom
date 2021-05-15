'use strict';
/*2. Дана таблица с юзерами с колонками Name, Email, Delete.
2.1. При нажатии на кнопку Delete запись из таблицы должна удаляться
2.2. При нажатии на запись в колонках Name или Email должен появляться input на месте текста,
 в котором его можно редактировать.
При нажатии клавиши Enter в инпуте изменения сохраняются.
2.3.  Создать два текстовых поля под таблицей, в которые можно вводить Name и Email и кнопку,
 которая добавит запись в таблицу.*/

 document.addEventListener("click", usersTableHandler);

 function usersTableHandler(e){
   console.log(e.target);
   switch(e.target.tagName){
     case "TD":
       changeUser(e);
       break;
   }
 }

 function changeUser(e){
   const fieldValue = e.target.innerText;
   const input = document.createElement("input");
   e.target.innerText = "";
   input.value = fieldValue;
   e.target.appendChild(input);

 }