// let a = +prompt();

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(a)

// let flag = true,
//     sum = 0,
//     counter = 0;

// while (flag){
//     let a = prompt();
//     if ((+a) === 0 || a === '') break;
//     if (isNaN(a)){
//         alert('Введено не число');
//         continue;
//     }
//     sum += Number(a);
//     counter++;
// }

// alert(`Программа завершилась.
// Среднее арифметическое: ${sum / counter}`);

// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let max = -Infinity,
//     min = Infinity,
//     num = '';

// for (let i = 0; i < str.length; i++){    
//     if(str[i] !== ' '){
//         num += str[i];
//     }else{
//         if (min > +num) min = +num;
//         if (max < +num) max = +num;
//         num = '';
//     }
// }

// console.log(max);
// console.log(min);

// let num = +prompt();
// let sum = 0,
//     count = 0,
//     rev = '';

// num += '';

// for (let i = 0; i < num.length; i++){
//     sum += +num[i];
//     count++;
//     rev = num[i] + rev;
// }

// alert(`Число: ${num}
// Сумма: ${sum}
// Количество: ${count}
// Перевернутое число: ${rev}`);

let arr = [];

console.log(arr);

arr.push(3);
arr.push(4);

console.log(arr);

// arr[10] = 34;

let a = arr.pop();

console.log(arr, a);

arr.unshift(5);

console.log(arr, a);

let b = arr.shift()

console.log(arr, a, b);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let s0 = arr.slice(5, 8);

console.log(arr, s0);

let s1 = arr.splice(4, 3);

console.log(arr, s1);

console.log(arr + s1);// 1,2,3,4,8,9,10 + 5,6,7

let s2 = arr.concat(s1);

console.log(s2);

console.log(s1.reverse());

let arr2 = '23424224'.split('');

console.log(arr2);

let arr3 = ['Создайте', 'новый', 'массив', 'и', 'заполните', 'его', 'значениями', 'от'];

console.log(arr3.join(' *** '));

let i1 = arr2.indexOf('4');
let i2 = arr2.lastIndexOf('4');

console.log(i1, i2)

let arr4 = [1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 2];
let c = 3;

while (arr4.indexOf(c) !== -1){
    let index = arr4.indexOf(c);
    arr4.splice(index, 1);
}

console.log(arr4);

console.log(arr4[arr4.length - 1]);

console.log(arr4.at(-2));

// console.log(2 ** 8);

// let d = 3;

// d **= 2;

// console.log(d)

//console.log(2 ^ 3); //10 11
                      //  01 => 1

console.log(Math.floor(Math.random() * (100 - 10) + 10))