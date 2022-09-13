/**
 * Note - описание одной заметки
 * NoteController - логика работы всех заметок
 * NoteUI - графиеское отображение
 */

import NoteController from "./noteControlle.js";
// import { f1 } from './async.js';


class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    async init(selector) {
        this.storageEpiration();

        this.container = document.querySelector(selector);
        let h1 = document.createElement('h1');
        h1.innerText = 'Loading...';

        this.container.append(h1);

        await this.getFetchData();

        h1.remove();

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

            import('./async.js')
                .then(module => {
                    console.log(module);
                    module.f1(4000).then(rez => console.log(rez));
                });
        });

        form.append(inputTitle, contentInput, btn);
        formContainer.append(form);
        this.container.append(formContainer, this.noteContainer);

        if (this.notes.length > 0){
            this.render();
        }

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

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// const counter3 = makeCounter();


// setTimeout(() => console.log('Hi'), 0);

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// let bublik = false;

// async function ff() {
//     let json = null
//     bublik = !bublik;
//     console.log(bublik);
//     let time = await fetch('https://jsonplaceholder.typicode.com/todos/1')



//     json = await time.json()

//     bublik = !bublik;
//     console.log(bublik);


//     console.log(json)

//     return json;
// }