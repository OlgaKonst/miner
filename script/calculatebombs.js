"use strict";

function calculateBombsAround(item, x, y) {
  var numberBombs = 0;
  var currentItem;
//debugger;
  for(var i = x-1; i <= x+1; i++) {
    if(i < 1 || i > tableWidth) continue;
    for(var j = y-1; j <= y+1; j++) {
      if(j < 1 || j > tableHeigth) continue;
      var table = document.querySelector('#field table');
      currentItem = document.querySelector('[data-x="'+i+'"][data-y="'+j+'"]');
      if(currentItem.dataset.item === 'bomb') {
        numberBombs++;
      }
    }
  }
  if(numberBombs > 0) {
    item.dataset.item = numberBombs;
  }
}

