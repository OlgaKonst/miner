"use strict";

function showEmptyCells(item) {
  var openCell = true;
  var currentItem;
  var element;
  while(openCell) {
    openCell = false;
    for( var x = 1; x <= tableHeigth; x++ ) {
      for(var y = 1; y <= tableWidth; y++) {
        currentItem = document.querySelector('[data-x="'+x+'"][data-y="'+y+'"]');
        if(currentItem.classList.contains('openCard') || currentItem.dataset.item === 'bomb') continue;
        for(var i = x-1; i <= x+1; i++) {
          if(i < 1 || i > tableHeigth) continue;
          for(var j = y-1; j <= y+1; j++) {
            if(j < 1 || j > tableWidth) continue;
            element = document.querySelector('[data-x="'+i+'"][data-y="'+j+'"]');
            if(element.dataset.item === '-1' && element.classList.contains('openCard')) {
              openCell = true;
              //item.classList.add('openCard');
              currentItem.classList.add('openCard');
              if(currentItem.dataset.item!=='-1') {
                currentItem.textContent = currentItem.dataset.item;
              }
              break;
            }
          }
        }
      }
    }
  }
}
