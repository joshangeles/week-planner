// var addEntry = document.querySelector('.entry-bttn');
// var modalContainer = document.querySelector('#modal-container');
// var entryForm = document.querySelector('form');
// var date = document.querySelector('#day');
// var time = document.querySelector('#time');
// var description = document.querySelector('textarea');
// var $containerDiv = document.querySelector('#table-container');
// var data = {
//   entries: [],
//   editing: null,
//   nextEntryId: 1
// };

// addEntry.addEventListener('click', function (e) {
//   modalContainer.className = 'container';
// });

// entryForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   modalContainer.className += ' hidden';
//   var entry = {
//     date: date.value,
//     time: time.value,
//     description: description.value,
//     entryId: data.nextEntryId
//   };
//   data.nextEntryId++;
//   data.entries.push(entry);

//   var btnRow = document.querySelector('#button-row');

//   if (data.entries.length > 0) {
//     btnRow.className = 'row txt-align-center';
//   }
//   return btnRow;
// }
// );

// function renderEntry(entry) {
//   var $divRow = document.createElement('div');
//   $divRow.className = 'row';
//   $containerDiv.appendChild($divRow);

//   var $divColumn = document.createElement('div');
//   $divColumn.className = 'column-full';
//   $divRow.appendChild($divColumn);

//   var $h2 = document.createElement('h2');
//   $divColumn.appendChild($h2);
//   $h2.textContent = `Scheduled Events for ${date.value}`;

//   var $table = document.createElement('table');
//   $divColumn.appendChild($table);

//   var $thead = document.createElement('thead');
//   $table.appendChild($thead);

//   var $tr = document.createElement('tr');
//   $thead.appendChild($tr);

//   var $thTime = document.createElement('th');
//   $thTime.textContent = 'Time';
//   $tr.appendChild($thTime);

//   var $thDescription = document.createElement('th');
//   $thDescription.textContent = 'Description';
//   $tr.appendChild($thDescription);

//   var $tbody = document.createElement('tbody');
//   $table.appendChild($tbody);

//   var $trRowOne = document.createElement('tr');
//   $tbody.appendChild($trRowOne);
// }
