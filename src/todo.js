// todo.js
let storage;

function addItemHandler() {
    console.log('in addItemHandler');

    //
    const listRow = document.querySelector('.container');
    console.log(listRow);

    let el = document.createElement('div')
    el.setAttribute('class', 'list-item');
    listRow.appendChild(el);

    const listItem = document.querySelector('.list-item')

    el = document.createElement('input')
    el.setAttribute('type', 'checkbox');
    // el.setAttribute('value', 'completed');
    listItem.appendChild(el);

    let newEl = document.createElement('input');
    newEl.setAttribute('type', 'text');
    listItem.appendChild(newEl);

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