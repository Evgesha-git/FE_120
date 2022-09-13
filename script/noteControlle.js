import { Note } from './note.js';

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
        // console.log(notesBuffer);
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

    async getFetchData(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(post => {
                    this.add({
                        title: post.title,
                        content: post.body,
                    });
                });
            });
        // console.log(this.notes);
    }
}

export default NoteController