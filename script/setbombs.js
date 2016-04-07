"use strict";

function setBombs(num) {
  while(num > 0){
    var x = ~~(Math.random()*(tableWidth-1)) + 1;
    var y = ~~(Math.random()*(tableHeigth-1)) + 1;
    var bomb =  document.querySelector('[data-x="'+x+'"][data-y="'+y+'"]');
    if(bomb.dataset.item !== 'bomb'){
      bomb.dataset.item = 'bomb';
      //bomb.textContent = 'bomb';
      num--;
    }
  }
}
