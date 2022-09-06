/**
 * Note - описание одной заметки
 * NoteController - логика работы всех заметок
 * NoteUI - графиеское отображение
 */

class Note{
    constructor(data){
        if (data.title.length > 0) this._data = data;
    }

    // edit(data){
    //     Object.assign(this._data, data);
    // }

    get data(){
        return this._data
    }

    set data(data){
        Object.assign(this._data, data);
    }
}

let note = new Note({title: 'fsdfsd'});



class NoteController{
    constructor(){
        this.notes = [];
    }

    add(data){
        if (!data.title) return;
        let note = new Note(data);
        let id = this.getRandom();
        note.data = {id: id};
        this.notes.push(note);
    }

    getRandom(){
        let id = Math.floor(Math.random() * 100);
        if (this.notes.length === 0) return id;
        let chech = this.notes.every(note => note.data.id === id);
        if (chech){
            return this.getRandom()
        }
        return id;
    }

    remove(id){
        this.notes = this.notes.filter(note => note.data.id !== id);
        return this;
    }

    edit(id, data){
        this.notes.forEach(note => {
            if (note.data.id === id) note.data = data;
        });
    }
}

class NoteUI extends NoteController{
    constructor(selector){
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    init(selector){
        this.container = document.querySelector(selector);
        let formContainer = this.createElement('div', [
            ['class', 'form']
        ]);
        let form = this.createElement('form');
        let inputTitle =this.createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Enter title'],
            ['class', 'title_input']
        ]);
        let contentInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Enter content'],
            ['class', 'content_input']
        ]);
        let btn = this.createElement('button', [
            ['type', 'submit']
        ], 'Add');

        this.noteContainer = this.createElement('div', [
            ['class', 'notes']
        ]);

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.add({
                title: inputTitle.value,
                content: contentInput.value,
            });
            inputTitle.value = '';
            contentInput.value = '';
            this.render();
        });

        form.append(inputTitle, contentInput, btn);
        formContainer.append(form);
        this.container.append(formContainer, this.noteContainer);
    }

    createElement(element, attribute = [], content){
        let elem = document.createElement(element);
        if (attribute.length > 0){
            attribute.forEach(attr => {
                elem.setAttribute(attr[0], attr[1])
            });
        }
        if(content) elem.innerHTML = content;
        return elem;
    }

    render(){
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let noteElem = this.createElement('div', [
                ['class', 'note']
            ]);
            let title = this.createElement('h2', [], note.data.title);
            let content = this.createElement('p', [], note.data.content);
            let editBtn = this.createElement('button', [], 'Edit');
            let removeBtn = this.createElement('button', [], 'Remove');

            removeBtn.addEventListener('click', () => this.remove(note.data.id).render());

            editBtn.addEventListener('click', () => {
                title.contentEditable = true;
                content.contentEditable = true;
            });

            title.addEventListener('keydown', e => this.edit(
                e,
                note.data.id,
                title,
                content
            ));
            
            content.addEventListener('keydown', e => this.edit(
                e,
                note.data.id,
                title,
                content
            ));

            noteElem.append(title, content, editBtn, removeBtn);
            this.noteContainer.append(noteElem);
        });
    }

    edit(e, id, title, content){
        if (e.ctrlKey && e.code === 'Enter'){
            let data = {
                title: title.innerText,
                content: content.innerText,
            };
            title.contentEditable = false;
            content.contentEditable = false;
            super.edit(id, data);
        }
    }
}

let noteUI = new NoteUI('.root');



/**
 * На дом - стилизовать приложение
 */