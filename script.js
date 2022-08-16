function Note(data){
    if (!data.title && data.title.length < 0) return;
    this.data = data;

    this.edit = function(data){
        Object.assign(this.data, data)
    }
}

function NotesController(){
    this.notes = [];
    this.container;
    this.id = 0;

    this.init = function(){
        let form = document.querySelector('#form');
        this.contaier = document.querySelector('.todoList');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(event);
            let inputs = form.querySelectorAll('input[type=text]');
            let valid = false;
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].value.length > 0 && inputs[i].name === 'title'){
                    valid = true;
                }
            }
            if (!valid) {
                alert('Поля пустые');
                return;
            }
            // let data = [...inputs].reduce((data, item) => ({...data, [item.name]: item.value}), {});
            let data = {};
            for (let i = 0; i < inputs.length; i++){
                data[inputs[i].name] = inputs[i].value;
            }
            this.add(data);
            this.render();
            [...inputs].forEach((item) => item.value = '');
        });

        let clear = document.querySelector('#clear');
        clear.addEventListener('click', () => this.clear());
    }

    this.add = function(data){
        let note = new Note(data);
        let id = this.id++;
        let complite = false;

        note.edit({id: id, complite: complite});
        this.notes.push(note);
    }

    this.render = function(){
        this.contaier.innerHTML = '';

        let notesItem = this.notes.map(item => this.createItem(item));
        notesItem.forEach(item => this.contaier.append(item));
    }

    this.createItem = function(note){
        let noteItem = document.createElement('div');
        noteItem.classList.add('node-item');

        let title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = note.data.title;

        let content = document.createElement('div');
        content.classList.add('content');
        content.innerText = note.data.content;
        if (note.data.complite){
            content.classList.add('complite');
        }

        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.innerText = 'Удалить запись';
        removeBtn.addEventListener('click', () => {
            this.remove(note.data.id);
        });

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Редактировать запись';
        editBtn.addEventListener('click', () => {
            content.contentEditable = true;
        });

        content.addEventListener('keydown', (event) => {
            if (event.altKey && event.key === 'Enter'){
                content.contentEditable = false;
                let contentText = content.innerText;
                note.edit({content: contentText});
            }
        });

        content.addEventListener('click', () => {
            if(content.contentEditable !== 'true'){
                content.classList.toggle('complite');
                note.edit({complite: !note.data.complite});
            }
        });

        noteItem.append(title, content, removeBtn, editBtn);
        return noteItem
    }

    this.remove = function(id){
        this.notes = this.notes.filter(item => item.data.id !== id);
        this.render();
    }

    this.clear = function(){
        this.notes = [];
        this.render();
    }
}

const notes = new NotesController().init();