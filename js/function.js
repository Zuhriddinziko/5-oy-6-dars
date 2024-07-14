function validete(fild, time) {
    if (fild.value.length < 5) {
        alert('6 ta belgidan kam bo`lmasin');
        fild.focus();

        return false;
    }
    if (!time.value) {
        alert('time tanlangan bo`lishi shart');
        time.focus();
        return false;
    }

    return true;
}
function getDate() {
    let dete = [];
    if (localStorage.getItem('todos')) {
        dete = JSON.parse(localStorage.getItem('todos'))
    }
    return dete;
}

function creteItem(todo) {
    return `  <div class="dete">
    <div id="todo_time">
          <div id="chekid">
            <input type="checkbox" name="chek" id="chek">
          </div>
          <div id="info">
            <b> ${todo.name}</b><br>
            <b> ${todo.time}</b>
          </div>
    </div>
    <div id="delete">
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-pen"></i>
    </div>
  </div>`;
}
export { validete, getDate, creteItem }