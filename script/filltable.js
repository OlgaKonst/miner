"use strict";

function fillTable(node) {
  var currentNode;
  for (var i = 0; i < node.childNodes.length; i++) {

    currentNode = node.childNodes[i];
    //console.log(currentNode.childNodes.length);
    for( var j = 0; j < currentNode.childNodes.length; j++) {
      if(currentNode.childNodes[j].dataset.item !== 'bomb') {
        var x = Number(currentNode.childNodes[j].dataset.x);
        var y = Number(currentNode.childNodes[j].dataset.y);
        //console.log(x, y);
        calculateBombsAround(currentNode.childNodes[j], x, y);
      }
    }
  }
}
