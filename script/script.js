/**
 * Note - описание одной заметки
 * NoteController - логика работы всех заметок
 * NoteUI - графиеское отображение
 */

class Note {
    constructor(data) {
        if (data.title.length > 0) this._data = data;
    }

    // edit(data){
    //     Object.assign(this._data, data);
    // }

    get data() {
        return this._data
    }

    set data(data) {
        Object.assign(this._data, data);
    }
}

let note = new Note({ title: 'fsdfsd' });



class NoteController {
    constructor() {
        this.notes = [];
        // this.localStorage = null;
    }

    add(data, newNote = true) {
        if (!data.title) return;
        let note = new Note(data);
        if (newNote) {
            let id = this.getRandom();
            note.data = { id: id };
        }
        this.notes.push(note);
    }

    getRandom() {
        let id = Math.floor(Math.random() * 100);
        if (this.notes.length === 0) return id;
        let chech = this.notes.every(note => note.data.id === id);
        if (chech) {
            return this.getRandom()
        }
        return id;
    }

    remove(id) {
        this.notes = this.notes.filter(note => note.data.id !== id);
        return this;
    }

    edit(id, data) {
        this.notes.forEach(note => {
            if (note.data.id === id) note.data = data;
        });
    }

    get storage() {
        return localStorage.getItem('notes');
    }

    set storage(notes) {
        let notesBuffer = JSON.stringify(notes);
        console.log(notesBuffer);
        localStorage.setItem('notes', notesBuffer);
    }

    storageEpiration() {
        if (!this.getCookie('note')) {
            localStorage.removeItem('notes')
        }

        this.setCookie('note', 'note', { 'max-age': 50 });
    }


    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
}

class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    init(selector) {
        this.storageEpiration();
        this.container = document.querySelector(selector);
        let formContainer = this.createElement('div', [
            ['class', 'form']
        ]);
        let form = this.createElement('form');
        let inputTitle = this.createElement('input', [
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
            e.preventDefault();
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

        if (!this.storage) return;
        if (this.storage.length > 0) {
            let notes = JSON.parse(this.storage);
            notes.forEach(note => {
                for (let key in note) {
                    this.add(note[key], false);
                }
            });
            this.render();
        }
    }

    createElement(element, attribute = [], content) {
        let elem = document.createElement(element);
        if (attribute.length > 0) {
            attribute.forEach(attr => {
                elem.setAttribute(attr[0], attr[1])
            });
        }
        if (content) elem.innerHTML = content;
        return elem;
    }

    render() {
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = true;
            let noteElem = this.createElement('div', [
                ['class', 'note']
            ]);
            let title = this.createElement('h2', [], note.data.title);
            let content = this.createElement('p', [], note.data.content);
            let editBtn = this.createElement('button', [], 'Edit');
            let removeBtn = this.createElement('button', [], 'Remove');

            removeBtn.addEventListener('click', () => this.remove(note.data.id).render());

            editBtn.addEventListener('click', (e) => {
                if (flag) {
                    title.contentEditable = true;
                    content.contentEditable = true;
                    editBtn.innerText = 'Save';
                    flag = !flag;
                } else {
                    this.edit(
                        e,
                        note.data.id,
                        title,
                        content
                    );
                    editBtn.innerText = 'Edit';
                    flag = !flag;
                }

            });

            noteElem.append(title, content, editBtn, removeBtn);
            this.noteContainer.append(noteElem);
            this.storageEpiration();
            this.storage = this.notes;
        });
    }

    edit(e, id, title, content) {
        let data = {
            title: title.innerText,
            content: content.innerText,
        };
        title.contentEditable = false;
        content.contentEditable = false;
        super.edit(id, data);
        this.render()
    }
}

let noteUI = new NoteUI('.root');



/**
 * На дом - стилизовать приложение
 */

//Замыкания

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();
const counter3 = makeCounter();


// setTimeout(() => console.log('Hi'), 0);

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

let bublik = false;

async function ff() {
    let json = null
    bublik = !bublik;
    console.log(bublik);
    let time = await fetch('https://jsonplaceholder.typicode.com/todos/1')



    json = await time.json()

    bublik = !bublik;
    console.log(bublik);


    console.log(json)

    return json;
}