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

export { Note }