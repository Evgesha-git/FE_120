// let regExp_1 = /ab+a/g;

// let str = regExp_1[Symbol.matchAll]('aa aba abba abbba abca abea');

// // for(let s of str){
// //     console.log(s[0]);
// // }

// // let s = 'sdfsdfs';

// console.log(str.next()); // {value: s, done: false}
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// let regExp_2 = /^\+?\d+\(\d{2,3}\)\d{3}-\d{2}-\d{2}/g;

// console.log(regExp_2.test('+375(293)654-34-12'));

// let regExp_3 = /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9.]{3,}.[a-zA-Z]{2,11}$/g;
// console.log(regExp_3.test('e23@sdfsd.re'));

// let regExp_4 = /^((http|https):\/\/[a-z0-9.]+.[a-z]{2,11})(\/[a-zA-Z0-9\-\/]+)?(\?[a-zA-Z0-9_\-=+&.]+)?(\#?[a-zA-Z0-9]+)?/g;

// let str = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

// let str2 = 'https://www.google.com/search?q=dfghskd&oq=dfghskd&aqs=chrome..69i57j0i1i10i13j0i13l6j0i10i13l2.575j0j7&sourceid=chrome&ie=UTF-8'

// let ex = regExp_4.exec(str2);

// console.log(ex);

let lamp = {
    power: '1000w',
    v: 220,
    c: 'E27',
    on: false,
    resurs: 10,
    switchOn: function(){
        if (!this.resurs) return 'Лампа перегорела'; 
        if (!this.on) this.resurs--
        this.on = !this.on;
    },
    setResurs: function(r){
        if (isNaN(r)) return;
        if (r <= 0) return;
        this.resurs = r;
    },
};

let calc = {
    history: [],
    add: function(a, b){
        this.history.push(`${this.prov(a)} + ${this.prov(b)} = ${this.prov(a) + this.prov(b)}`);
        return this.prov(a) + this.prov(b);
    },
    prov: function(a){
        if (!isNaN(a)) return +a;
    }
}


