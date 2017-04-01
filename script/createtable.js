"use strict";

function createTable(){
  var tableEl = document.createElement('table');
  for(var i = 1; i <= tableHeigth; i++) {
    var trEl = document.createElement('tr');
    for(var j = 1; j <= tableHeigth; j++) {
      var tdEl = document.createElement('td');
      tdEl.dataset.x = j;
      tdEl.dataset.y = i;
      tdEl.dataset.item = -1;
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
  }
  field.appendChild(tableEl);
}
