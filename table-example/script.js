// obtaining elements for more comfortable working
const table = document.querySelector('table');
const thead = table.tHead;
const tbody = table.tBodies[0];

// click by the heading cell invokes sorting
thead.addEventListener('click', event => {
  const element = event.target.closest('.cell');

  // getting the index via using regex
  const columnIndex = [].find.call(element.classList, x => x.match('cell-')).split('-')[2];
  const sortedTable = sort(parseInt(columnIndex));

  // just reminder: methods like 'before', after' etc removes item from
  // first place and inserts it into other (they're swapping their places)
  for (let i = 0; i < sortedTable.length - 1; i++) {
    sortedTable[i].before(sortedTable[i + 1]);
  }
});

let sortedIndex;
let alreadySorted = false;
function sort(columnIndex) {
  // this is for using arrays' method like sort, reverse, etc
  const allRows = [...tbody.children];

  allRows.sort((a, b) => {
    let firstValue = a.children[columnIndex - 1].innerHTML;
    let secondValue = b.children[columnIndex - 1].innerHTML;

    // number and string are sorted in different ways
    if (isNaN(Number(firstValue))) {
      return firstValue.localeCompare(secondValue);
    }
    return firstValue - secondValue;
  });

  // if we try to sort by the column which we've sorted already
  // sort it in reverse order
  if (sortedIndex == columnIndex && alreadySorted) {
    allRows.reverse();
    alreadySorted = false;
  } else {
    alreadySorted = true;
  }
  sortedIndex = columnIndex;

  return allRows;
}