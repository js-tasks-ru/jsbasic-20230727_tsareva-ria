function highlight(table) {
  let tableRows = table.querySelectorAll('tbody > tr');

  for (let row of tableRows) {
    // age < 18
    if (row.cells[1].textContent < 18) {
      row.style.textDecoration = 'line-through';
    }

    // male/female class
    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    //available/unavailable class and hidden attribute
    if (row.cells[3].dataset.available === 'true') {
      row.classList.add('available');
    } else if (row.cells[3].dataset.available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }
  }

}
