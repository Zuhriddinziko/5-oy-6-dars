import { validete, getDate, creteItem } from "./function.js";
// let form = document.querySelector('#form');
let fild = document.querySelector('#fild');
let time = document.querySelector('#tame');
let button = document.querySelector('#btn');
let filter = document.querySelector('#filter');
let wrapper = document.querySelector('#wrapper');
// let form = document.querySelector('#form');
// console.log(time)

button && button.addEventListener('click', function (event) {
    event.preventDefault();

    const isvali = validete(fild, time);
    if (!isvali) {
        return;
    }

    let todo = {
        name: fild.value,
        time: time.value,
        status: 'active',
        id: Date.now()
    }
    let todos = getDate();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    fild.value = '';
    time.value = '';
    let item = creteItem(todo);
    wrapper.innerHTML += item;

})

document.addEventListener('DOMContentLoaded', function () {
    let todos = getDate();
    todos.forEach(element => {
        let item = creteItem(element);
        wrapper.innerHTML += item;
    });
})