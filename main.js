var addEntry = document.querySelector('.entry-bttn');
var modalContainer = document.querySelector('#modal-container');
var entryForm = document.querySelector('form');
// var date = document.querySelector('#day');
// var time = document.querySelector('#time');
// var entry = {};

addEntry.addEventListener('click', function (e) {
  modalContainer.className = 'container';
});

entryForm.addEventListener('click', function (e) {
  e.preventDefault();

});

// console.log(date);
