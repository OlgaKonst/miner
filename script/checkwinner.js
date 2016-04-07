"use strict";

function checkWinner(node,tableWidth, tableHeigth, bombs) {
  var currentNode;
  var number = tableWidth*tableHeigth - bombs;
  var counter = 0;
  console.log(number);
//debugger;
  for (var i = 0; i < tableHeigth; i++) {
    currentNode = node.childNodes[i];
    for( var j = 0; j < tableWidth; j++) {
      if(currentNode.childNodes[j].classList.contains('openCard')) {
        counter++;
      }
    }
  }
  console.log('counter', counter);
  if(counter === number) {
   showAllCells(node, "Congratulations! You won!")
  }
}
