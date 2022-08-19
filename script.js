function init(){
    let textInput = document.querySelector('#title');
    let form = document.querySelector('#form');
    let conteiner = document.querySelector('.todoList');
    let clear = document.querySelector('#clear');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let elem = createToDo(textInput.value);
        textInput.value = '';
        conteiner.append(elem);
    });

    clear.addEventListener('click', () => {
        conteiner.innerHTML = '';
    });

    conteiner.addEventListener('click', e => {
        if (e.target.className === 'del-todo'){
            e.target.parentNode.remove();
        }
        if (e.target.className === 'edit-todo'){
            let title = e.target.parentNode.querySelector('p');
            title.contentEditable = true;
        }
    });

    conteiner.addEventListener('keydown', e => {
        if (e.target.tagName === 'P'){
            if (e.altKey && e.key === 'Enter'){
                e.target.contentEditable = false;
            }
        }
    });
}

function createToDo(text){
    let elemToDo = document.createElement('div');
    elemToDo.classList.add('todo-container');
    
    let title = document.createElement('p');
    title.innerText = text;

    let delBtn = document.createElement('button');
    delBtn.classList.add('del-todo');

    delBtn.innerText = 'Удалить заметку';

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerText = 'Редактировать заметку';

    elemToDo.append(title, delBtn, editBtn);

    return elemToDo;
}

init();

// Array.prototype.delLastItem = function(){
//     this.pop();
// }

// Number.prototype.adder = function(num){
//     console.log(this);
//     return this + num;
// }