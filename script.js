// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let i = arr.length - 1;
// let rez = [];

// while (i >= 0){
//     rez.push(arr[i].toString().split('').reverse().join(''))
//     i--;
// }

// console.log(rez);

// let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2],
//     start = arr.indexOf(0),
//     end = arr.lastIndexOf(0),
//     sum = 0;

// if (start !== -1 && end !== -1){
//     for (; start < end; start++){
//         sum += arr[start];
//     }
//     console.log(sum);
// }else{
//     console.log(sum);
// }

// let a = 5;

// for (let i = 1; i < a; i++){
//     // document.write('<pre>' + ' '.repeat(a - i) + '^'.repeat(i * 2 - 1) + ' '.repeat(a - i) + '</pre>');
//     let str = '';
//     for (b = 0; b < a - i; b++){
//         str += ' ';
//     }
//     for (let c = 0; c < i * 2 - 1; c++){
//         str += '^';
//     }
//     for (let d = 0; d < a - i; d++){
//         str += ' ';
//     }
//     document.write(`<pre>${str}</str>`);
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(a){
//     console.log(a ** a);
// });

// let arr2 = arr.map(function(a){
//     return a ** (a + 2)
// });

// console.log(arr2);

// let arr3 = arr.filter(function(a){
//     if (a % 2 === 0){
//         return a;
//     }
// });

// console.log(arr3);

// let arr4 = new Array(20).fill('a', 5, 15);

// console.log(arr4);

// let f = arr.find(function(a){
//     if (a % 2 === 0){
//         return a;
//     }
// });

// console.log(f);

// let e = arr.every(function(a){
//     if (a > 0 && a < 4) return true
// });

// console.log(e);

// let s = arr.some(function(a){
//     if (a > 0 && a < 4) return true
// });

// console.log(s);

// let a = arr.reduce(function(count, a){
//     return count + a   
// }, '');

// console.log(a);

// console.log(arr.includes('3'));

// f1()
// f2()

// function f1(){
//     console.log('f1')
// }

// const f2 = function(){
//     console.log('f2')
// }

// (function(){
//     console.log('Я самовызывающаяся функция!')
// }());

// function f3(a, b, c){
//     // console.log(a + b + c) - не хорошо
//     return a + b + c
// }

// console.log(f3(1, 2, 3))

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function getNumber(min, max, a){
//     let num = getRandomNumber(min, max);
//     // if(num % a !== 0) return getNumber(min, max, a);
//     while (num % a !== 0) {
//         num = getRandomNumber(min, max);
//     }
//     return num;
// }


// let arr = [];

// for (let i = 0; i < 20; i++){
//     let n = getNumber(10, 500, 10);
//     arr.push(n);
// }

// console.log(arr);

// const f4 = () => {
//     console.log('f4')
// }

// f4()

// const f5 = a => a ** 2

// console.log(f5(4))
// let arr2 = arr.filter(a => a > 100 && a < 200)

// console.log(arr2)

// function f6(a, b){
//     // let f = () => console.log(arguments)
//     // f()
//     console.log(this)
// }

// const f7 = (a, b) => console.log(this)

// f6(3, 4, 45,23,2)
// f7(3, 4, 45,23,2)

let arr = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;

for (let i = 0; i < arr.length; i++){
    if(!arr[i] && arr[i] !== 0) count++;
}

console.log(count);