var addEntry = document.querySelector('.entry-bttn');
var modalContainer = document.querySelector('#modal-container');
var entryForm = document.querySelector('form');
var date = document.querySelector('#day');
var time = document.querySelector('#time');
var description = document.querySelector('textarea');
var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

addEntry.addEventListener('click', function (e) {
  modalContainer.className = 'container';
});

entryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  modalContainer.className += ' hidden';
  var entry = {
    date: date.value,
    time: time.value,
    description: description.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.push(entry);
}
);

// function renderEntry(entry) {

// }
