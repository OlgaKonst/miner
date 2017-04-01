"use strict";

function showAllCells(node, text) {
  var currentNode;
//debugger;
  message.classList.add('message');
  message.textContent = text;
  for (var i = 0; i < node.childNodes.length; i++) {
    currentNode = node.childNodes[i];
    for( var j = 0; j < currentNode.childNodes.length; j++) {
      console.log(currentNode.childNodes[j]);
      currentNode.childNodes[j].classList.add('openCard');
      console.log(currentNode.childNodes[j]);
      if(currentNode.childNodes[j].dataset.item === 'bomb') {
        currentNode.childNodes[j].classList.add('bomb');
      } else if(currentNode.childNodes[j].dataset.item!=='-1') {
        currentNode.childNodes[j].textContent = currentNode.childNodes[j].dataset.item;
      }
    }
  }
}
