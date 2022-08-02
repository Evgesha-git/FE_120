function pyramyd (count, a = null){
    if (isNaN(count)) return;
    if (a !== null) if (a === ' ' || a.length > 1) return;
    for (let i = 1; i < count + 1; i++){
        let elem = a ?? (i + '');
        let b = elem + '';
        for (let j = 1; j < i; j++){
            elem += b;
        }
        document.write(elem, '<br/>');
    }
}

function treug(num, reverse = false){
    // let initialValue = reverse ? num : 1,
    //     stopValue = reverse ? 0 : num + 1;

    // for (let i = initialValue; 
    //     (reverse ? i > stopValue : i < stopValue); 
    //     (reverse ? i-- : i++)){
    //         document.write('<pre>' + ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(num - i) + '</pre>');
    // }

    reverse ? rev(num) : normal(num)
}

function normal(num){
    for (let i = 1; i < num + 1; i++){
        document.write('<pre>' + ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(num - i) + '</pre>');
    }
}

function rev(num){
    for (let i = num; i > 0; i--){
        document.write('<pre>' + ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(num - i) + '</pre>');
    }
}

function fib(num){
    return num <= 1 ? num : fib(num - 1) + fib(num - 2)
}

function memoiz(fn){
    let memo = {}
    return (...args) => {
        let num = args[0]
        if (num in memo){
            return memo[num]
        }else{
            let rez = fn(num);
            memo[num] = rez;
            return rez;
        }

    }
}

const fib2 = memoiz(
    (x) => x <= 1 ? x : fib2(x - 1) + fib2(x - 2)
)


function fibArr(num){
    let rez = [];
    for (let i = 0; i < num; i++){
        rez.push(fib2(i));
    }
    console.log(rez)
}




function counter() {
    let count = 0;
    return function(){
        return(count++)
    }
}

const counter1 = counter();
const counter2 = counter();


function mail(str){
    let point = str.lastIndexOf('.');
    if (point === str.length - 1 || point === -1 || point === 0) return 'Не почтовый адресс';
    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Не почтовый адресс';
    if (dog === str.length - 1 || dog === -1 || dog === 0 || dog < 3) return 'Не почтовый адресс';
    let defis = str.lastIndexOf('-');
    if (defis === str.length - 1 || defis === 0) return 'Не почтовый адресс';
    let n = str.lastIndexOf('_');
    if (n === str.length - 1 || n === 0) return 'Не почтовый адресс';

    let symbols = `абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ `
    let nameSymbols = '!"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < str.length - 1; i++){
        if(str[i] === '.' && str[i + 1] === '.' || 
            str[i] === '@' && str[i + 1] === '.' ||
            str[i] === '.' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '@' ||
            str[i] === '_' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '-' ||
            str[i] === '-' && str[i + 1] === '-' ||
            str[i] === '_' && str[i + 1] === '_' ) return 'Не почтовый адресс';
        if(symbols.includes(str[i])) return 'Не почтовый адресс';
    }

    let name = str.slice(0, dog);

    if(nums.includes(name[0])) return 'Не почтовый адресс';
    for (let i = 0; i < name.length; i++){
        if (nameSymbols.includes(name[i])) return 'Не почтовый адресс';
    }

    let dom = str.slice(point);
    let domName = str.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return 'Не почтовый адресс';
    if(domName.length < 2 || domName.length > 11) return 'Не почтовый адресс';
    
    return 'Почтовый адресс верен';
}

function f12(name, suraname, lastName, groupNum){
    let title = 'Домашняя работа: «Функции»';
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${suraname}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;  

    title = f4(title, maxStr);
    subTitle = f4(subTitle, maxStr);
    nameText = f4(nameText, maxStr);

    
    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log(`${ramka}\n${title}\n${subTitle}\n${nameText}\n${ramka}`);
}

function f4(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}