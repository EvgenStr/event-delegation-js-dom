'use strict';
/*1.Есть список. В каждом пункте есть подпункты, которые изначально скрыты.
Для выполнения задания можно использовать только один обработчик
1.1. Реализовать сворачивание/разворачивание подпунктов при клике.
1.2 Сделайте так, чтобы при разворачивании одного подпункта сворачивались все остальные.*/

document.addEventListener('click', toggleVisibility);

function toggleVisibility({ target }) {
  if (!target.classList.contains('headListItem')) return;
  const currentSubListItem = target.querySelector('.subList');
  const subListItems = document.querySelectorAll('.subList');
  const currentVisibility = currentSubListItem.hidden;
  subListItems.forEach(item => item.hidden = true);
  currentSubListItem.hidden = !currentVisibility;
}