// todo.js
let storage;
// push data to storage then update localStorage with
// storage record after it has been stringified

textInputHandler = (event) => {
    console.log('in textInputHandler');
    console.log(event);
    console.log(event.target.value);
    localStorage.todoInput = event.target.value;

    console.log(localStorage.todoInput);
};

checkboxHandler = (event) => {
    console.log('in checkboxHandler');
    localStorage.checkboxStatus = event.target.value;
    console.log(localStorage.checkboxStatus);
}

dueDateHandler = (event) => {
    console.log('in dueDateHandler');
    localStorage.dueDate = event.target.value;
    console.log(localStorage.dueDate);
}

function addItemHandler() {
    console.log('in addItemHandler');

    // add new row to list of todos
    const listRow = document.querySelector('.container');
    console.log(listRow);

    let el = document.createElement('div')
    el.setAttribute('class', 'list-item');
    listRow.appendChild(el);

    //add checkbox, text input box, and date to newly added row
    const listItem = document.querySelector('.list-item:last-child')
    // checkbox
    el = document.createElement('input')
    el.setAttribute('type', 'checkbox');
    el.setAttribute('id', 'checkboxId');
    listItem.appendChild(el);
    el = document.querySelector('input#checkboxId:last-child');
    el.addEventListener('change', checkboxHandler, true);
    // text input box
    el = document.createElement('input');
    el.setAttribute('type', 'text');
    el.setAttribute('size', '100');
    el.setAttribute('id', 'input-text');
    listItem.appendChild(el);
    el = document.querySelector('input#input-text:last-child');
    el.addEventListener('change', textInputHandler, true);
    // date
    el = document.createElement('input');
    el.setAttribute('type', 'date');
    el.setAttribute('id', 'due-date');
    el.setAttribute('name', 'duedate');
    listItem.appendChild(el);
    el = document.querySelector('input#due-date:last-child');
    console.log(el);
    el.addEventListener('change', dueDateHandler, true);

}

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded and parsed');

    // add plus button and listener to DOM
    const headerOne = document.querySelector('h1');
    let el = document.createElement('div');
    el.setAttribute('class', 'plus-btn');
    headerOne.appendChild(el);

    const plusDiv = document.querySelector('.plus-btn');
    el = document.createElement('input');
    el.setAttribute('type', 'button');
    el.setAttribute('value', '+');
    el.setAttribute('id', 'add-item-button')
    plusDiv.appendChild(el);
    el.addEventListener('click', addItemHandler, true);

    // add container for todo list items
    el = document.createElement('div');
    el.setAttribute('class', 'container');
    headerOne.after(el);
})

// Goals for this project
// Properties: title, description, dueDate, priority, notes, checklist
// Should have default list and should be able to create new lists like projects
// First opening should produce a default todo list that everything goes into
// After that user should be able to create new lists to group items
// Look of UI:
//     view all projects
//     view all todos in each projects
//     expand a single todo to see / edit details
// delete a todo
// Store data in localStorage
// date-fns bunch of handy functions to format and manipulate
//  dates and times