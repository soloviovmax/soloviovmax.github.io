do {
   var quantity = prompt('Вседите число', '');
   if (isNaN(quantity) === true) {
      alert('Введите число');
    } else if (quantity === null) {
      quantity = 10;
    } else if (quantity <= 1) {
      alert('Введите число побольше');
    } else if (quantity > 20) {
      alert('Число слишком большое');
    } 
} while (isNaN(quantity) || quantity <= 1 || quantity > 20);

var table = document.querySelector('.table');

var tr = document.createElement('tr');
tr.setAttribute('class', 'yellow');
table.appendChild(tr);

for (var i = 1; i <= quantity; i++) {
   var td = document.createElement('td');
   tr.appendChild(td);
   td.textContent = i;
}

for (i = 1; i < quantity; i++) {
   var tr = document.createElement('tr');
   table.appendChild(tr);

   for (k = 1; k <= quantity; k++) {
      var td = document.createElement('td');
      tr.appendChild(td);
      if (k === 1) {
         td.setAttribute('class', 'yellow');
         td.textContent = k + i;
      } else {
         td.textContent = k * (i + 1);
      }
   }
   
}

for (var i = 2; i < table.rows.length - 1; i++) {
   var row = table.rows[i];
   row.cells[i].style.backgroundColor = '#F6F4DA';
 }