"use strict";
var tableWidth = 10;
var tableHeigth = 10;
var field = document.querySelector('#field');
var quantityBomb = 10;
var startButton = document.querySelector('button');
var message = document.querySelector('.message');

createTable();
var tableEl = document.querySelector('#field table');
setBombs(quantityBomb);
fillTable(tableEl);

tableEl.addEventListener('click', handler);

function handler(e) {
  console.log(1);
  var elem = e.target.dataset.item;
  if (elem === 'bomb') {
    showAllCells(tableEl, "Unfortunately, You lost!");
  } else if(elem !== '-1'){
    e.target.textContent = elem;
    e.target.classList.add('openCard');
    checkWinner(tableEl, tableWidth, tableHeigth, quantityBomb);
  } else {
    e.target.classList.add('openCard');
    showEmptyCells(e.target);
    checkWinner(tableEl, tableWidth, tableHeigth, quantityBomb);
  }
}

startButton.addEventListener('click', function() {
  field.innerHTML = '';
  message.textContent = '';
  createTable();
  setBombs(quantityBomb);
  var tableEl = document.querySelector('#field table');
  fillTable(tableEl);
  tableEl.addEventListener('click', handler);
});




