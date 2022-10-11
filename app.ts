import ff1 from "./m"

let num: number = 23;

// num = +(prompt() || 0);

let str: string = 'str';

let bool: boolean = true;

let arr: any[] = [1, 2, 3, 'f'];

let arr2: number[] = [1, 2, 3];

let arr3: Array<String> = ['1', '2', '3'];

let arr4 = []; //any

//tsc --watch || tsc -w

let obj = {
    name: 'Jhon',
    age: 33,
};

obj = { name: 'Erick', age: 44 };

// obj.name = 44;

for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

function f1(a: number, b: number): string {
    return a.toString() + b.toString();
}

console.log(f1(2, 5));

const f2 = (a: number): number => {
    return a ** 2;
}

const f3 = (a: string): any => {
    console.log(a);
    return a;
}

const f4 = (a: string): void => {
    console.log(a);
    return;
}

let elem: HTMLElement = document.querySelector('.output');

const f5 = (elem: HTMLElement, text: string): void => {
    elem.innerText = text;
    elem.addEventListener('click', (e: Event) => {
        console.log(e.target);
    });
}

let arr5: [string, number] = ['str', 56];

arr5[0] = 'fff';

// arr5[0] = 4;

let arr6: readonly [string, number] = ['str', 56];

// arr6[0] = 'ff';

let arr7: [string, number?, number?] = ['sss', 45];

let arr8: [string, ...number[]] = ['dd', 2, 3, 4, 5, 6];

let num2: number | null;

// num2 = +prompt();

// enum Season {Winter = 1, Spring = 2, Summer = 3, Autum = 4};
// enum Season {Winter, Spring, Summer, Autum};
enum Season {
    Winter = 'Осень', 
    Spring = 'Зима', 
    Summer = 'Весна', 
    Autum = 'Лето'
};


// let current: string = Season[1];

// console.log(current);

// let current2: number = Season.Spring;

// console.log(current2);

let current3: Season = Season.Summer;
console.log(current3);
// let current4: Season = 3;
// console.log(current4);

type str = string | null;

let s: str = 'str';

let str1: 'succes' | 'error';

str1 = 'error';

type message = 'succes' | 'error' | 'warning' | null;

let str2: message = 'warning';

let date: Date = new Date();
console.log(date.getTime());

let reg: RegExp = /.+?/gi;

let div: HTMLDivElement = document.createElement('div');

let list: NodeList = document.querySelectorAll('div');
let list2: HTMLCollection = document.getElementsByTagName('div');

let user: {name: string, age: number, weigth?: number};

user = {
    name: "Alex",
    age: 33,
    weigth: 144,
};

type User1 = {
    name: string,
    age: number,
    color?: string[],
    getName?: () => string,
    getAge?: () => number,
}

let user1: User1 = {
    name: 'User1',
    age: 44,
    color: ['#f0f'],
}

interface User2 {
    name: string,
    age: number,
    weigth?: number[],
}

let user3: User2 = {
    name: "Petr",
    age: 32,
};

type Users = {
    id: number,
    user: User1
}

let users: Array<Users> = [
    {
        id: 1,
        user: {
            name: "Alex",
            age: 22
        }
    }
];

let users1: Users[] = [
    {
        id: 1,
        user: {
            name: "Alex",
            age: 22
        }
    }
];

function f6 (a: number, b: number = 0):number{
    return a + b;
}

console.log(f6(1, 5));
console.log(f6(1));
console.log(f6(1, 6));

function f7(...rest: number[]):void{
    console.log(rest);
}

f7(1, 2, 3, 4);

type func = (a: number, b: number) => number;

const f8: func = (a: number, b: number): number => {
    return a + b;
}

console.log(ff1());
