console.log('Первый скрипт');
// console.log(document.querySelector('h1'));


let num = '354586';

for (let i = 0; i < num.length; i++){
    console.log(num[i]);
}

let a,
    b,
    c = 23,
    d;

console.log(num);

if(num < 10)
    console.log('Да');
else
    console.log('Нет');

// debugger
switch (num){
    case '23':
        break;
    default:
        break;
}

a = 45;

// debugger
a > 30 ? 
    a < 50 ? 
        console.log('Да') : 
        console.log('Нет') : 
    null

for (let i = 0; i < 10; i++){
    console.log(i);
}

let f = 0;
console.log(f++);
console.log(++f);

let arr = [1, 2, 3];

arr[100] = 'lol';

console.log(arr);

let i = true;
a = 0;

while (i){
    console.log(a + 10);
    a++;
    a > 20 ? i = !i : null
}


console.log('--------------')
a = 0;

do{
    console.log(a + 10);
    a++;
    a > 20 ? i = !i : null
}while(i);

console.log('=======================');

for (let i in '1234'){
    console.log(i);
}

console.log('=======================');

for (let v of 'sdgfjksd'){
    console.log(v);
}

console.log('=======================')

let str = 'rih     ert   fghdk er  tjlret tert';

// let strRez = []

for (let i = 0; i < str.length; i++){
    if (str[i] === ' ' && str[i + 1] !== ' '){
        // console.log(str[i + 1]);
        let rez = '';
        for (let j = i + 1; j < str.length; j++){
            if (str[j] !== ' '){
                rez += str[j];
            }else{
                break;
            }
        }
        console.log(rez);
    }
}

console.log('==============================');

let days = 36535;

if (days < 365){
    console.log('Меньше года');
}else if (days < 31){
    console.log('Меньше месяца');
}else if (days < 7){
    console.log('Меньше недели');
}else{
    console.log('Больше года');
}

let eyar, mont, week;

eyar = Math.floor(days / 365);

days = days % 365;

mont = Math.floor(days / 31);

days = days % 31;

week = Math.floor(days / 7);

days = days % 7;

console.log(eyar, mont, week, days);

let strNum = '324123';

console.log(+strNum[0] + +strNum[1] + +strNum[2]);


if ((+strNum[0] + +strNum[1] + +strNum[2]) === (+strNum[3] + +strNum[4] + +strNum[5])){
    console.log('Равны');
}else{
    console.log('не равны');

}

document.write('<h1>Hello world</h1><br/><p>Параграф</p>');

let max = -Infinity,
    min = Infinity;

a = -3389458342765893244;

if (a > max){
    max = a
}
if(a < min){
    min = a
}

console.log(max, min)