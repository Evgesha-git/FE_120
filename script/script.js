/**
 * Note - описание одной заметки
 * NoteController - логика работы всех заметок
 * NoteUI - графиеское отображение
 */

const Note = function(data){ //{!title!, content?}
    if (data.title.length > 0) this.data = data;
}

Note.prototype.edit = function(data){
    Object.assign(this.data, data);
    return this;
}

const NoteController = function(){
    this.notes = [];
}

NoteController.prototype.add = function(data){ //{!title!, content?}
    if (!data.title) return;
    let note = new Note(data);
    let id = this.getRandomId();
    note.data.id = id;
    this.notes.push(note);
    return this;
}

NoteController.prototype.getRandomId = function(){
    let id = Math.floor(Math.random() * 100);
    if (this.notes.length === 0) return id;
    let check = this.notes.every(note => note.data.id === id);
    if (check){
        return this.getRandomId();
    }else{
        return id;
    }
}

NoteController.prototype.removeNote = function (id){
    this.notes = this.notes.filter(note => note.data.id !== id);
    return this;
}

NoteController.prototype.editNote = function (id, data){
    this.notes.forEach(note => {
        if(note.data.id === id){
            note.edit(data);
        }
    });
    return this;
}

const NoteUI = function(){
    NoteController.apply(this);
    this.container = null;
    this.noteContainer = null;
}

NoteUI.prototype = Object.create(NoteController.prototype);

NoteUI.prototype.init = function(selector){
    this.container = this.search(selector);
    let formContainer = this.createElement('div', [
        ['class', 'form'],
    ]);
    let form = this.createElement('form');
    let titleInput = this.createElement('input', [
        ['type', 'text'],
        ['placeholder', 'title']
    ]);
    let contentInput = this.createElement('input', [
        ['type', 'text'],
        ['placeholder', 'content']
    ]);
    let sendBtn = this.createElement('button', [
        ['type', 'submit']
    ], 'Add note');
    this.noteContainer = this.createElement('div', [
        ['class', 'notes']
    ]);

    form.addEventListener('submit', e => {
        e.preventDefault();
        this.add({
            title: titleInput.value,
            content: contentInput.value
        });
        titleInput.value = '';
        contentInput.value = '';
        this.render()
    });

    form.append(titleInput, contentInput, sendBtn);
    formContainer.append(form);
    this.container.append(formContainer, this.noteContainer);
}

NoteUI.prototype.search = function (selector){
    return document.querySelector(selector);
}

NoteUI.prototype.createElement = function(tagName, attr = [], content){ //'', [[],[]], content?
    let elem = document.createElement(tagName);
    attr.forEach(atr => {
        elem.setAttribute(atr[0], atr[1])
    });
    if (content) elem.innerHTML = content;
    return elem;
}

NoteUI.prototype.render = function(){
    this.noteContainer.innerHTML = '';
    this.notes.forEach(note => {
        let container = this.createElement('div', [
            ['class', 'note']
        ]);
        let title = this.createElement('h2', [
            ['class', 'title']
        ], note.data.title);
        let content = this.createElement('p', [
            ['class', 'content']
        ], note.data.content);
        let editBtn = this.createElement('button', [
            ['class', 'edit']
        ], 'Edit');
        let removeBtn = this.createElement('button', [
            ['class', 'remove']
        ], 'remove');

        removeBtn.addEventListener('click', () => this.removeNote(note.data.id));

        editBtn.addEventListener('click', () => {
            title.contentEditable = true;
            content.contentEditable =true;
        });

        title.addEventListener('keydown', e => this.saveEdit(e, title, content, note));
        content.addEventListener('keydown', e => this.saveEdit(e, title, content, note));

        container.append(title, content, editBtn, removeBtn);
        this.noteContainer.append(container);
    });
}

NoteUI.prototype.removeNote = function (id){
    NoteController.prototype.removeNote.call(this, id);
    this.render();
}

NoteUI.prototype.saveEdit = function (e, t, c, note){
    if (e.altKey && e.code === 'Enter') {
        t.contentEditable = false;
        c.contentEditable = false;
        note.edit({title: t.innerText, content: c.innerText});
    }
}

let note = new NoteUI().init('.root');

/**
 * На дом - стилизовать приложение
 */