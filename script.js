function Calculator(name){
    this.operandA = 0;
    this.operandB = 0;
    this.rez = 0;
    this.operation = null;
    this.name = name;
    this.pole = null;
    let self = this;

    this.init = function (){
        this.pole = document.getElementById('pole');
        let clear = document.getElementById('clear');
        let rezBtn = document.getElementById('rez');
        let addBtn =  document.getElementById('add');
        let minBtn = document.getElementById('min');
        let multBtn = document.getElementById('mult');
        let divBtn = document.getElementById('div');

        this.pole.value = this.operandA;

        clear.addEventListener('click', () => this.clear());

        addBtn.addEventListener('click', () => this.add());
        minBtn.addEventListener('click', () => this.minus());
        multBtn.addEventListener('click', () => this.mult());
        divBtn.addEventListener('click', () => this.div());
        rezBtn.addEventListener('click', () => this.getRezult());


    }

    this.fMethod = function(){
        if(this.operation){
            this.getRezult();
            this.operandA = this.rez;
            this.operandB = +this.pole.value;
            this.pole.value = 0;
        }else{
            this.operandA = +this.pole.value;
            // this.operandB = b;
            this.pole.value = 0;
        }
    }

    this.add = function(){
        this.fMethod();
        this.operation = '+';
        return this;
    }

    this.getRezult = function(){
        this.operandB = +this.pole.value;
        switch (this.operation){
            case '+':
                this.rez = this.operandA + this.operandB
                break;
            case '-':
                this.rez = this.operandA - this.operandB
                break; 
            case '*':
                this.rez = this.operandA * this.operandB
                break; 
            case '/':
                this.rez = this.operandA / this.operandB
                break; 
        }
        this.pole.value = this.rez;
        return this;
    }

    this.minus = minus;

    this.mult = () => {
        this.fMethod();
        this.operation = '*';
        console.log(this);
        return this;
    }

    this.div = function (){
        this.fMethod();
        this.operation = '/';
        return this;
    }

    this.getOtvet = function(){
        return this.rez;
    }

    this.clear = function (){
        this.operandA = 0;
        this.operandB = 0;
        this.operation = null;
        this.rez = 0;
        this.pole.value = this.operandA;
    }

    // this.method = function(){
    //     return function(){
    //         console.log(self);
    //     }
    // }

    // this.method2 = () => {
    //     return () => console.log(this)
    // }
}

function minus(){
    this.fMethod();
    this.operation = '-';
    console.log(this);
    return this;
}

let calc1 = new Calculator('Калькулятор 1').init();
// let calc2 = new Calculator('Калькулятор 2');

// console.log(calc1.mult === calc2.mult);
// console.log(calc1.minus === calc2.minus);


// let button = document.querySelector('.btn');

// button.addEventListener('click', function(){
//     console.log(this);
// });

// button.addEventListener('click',() => {
//     console.log(this);
// });

let wrapper = document.querySelector('.wrapper');

wrapper.innerHTML = ` <h1>Hello GitHub</h1>
<p>Второй коммит</p>
<p>Коммит в ветке dev</p>`;

let button = document.createElement('button');
button.innerText = 'Особая кнопка';
button.setAttribute('id', 'magick_button');
button.classList.add('class');
button.style.borderRadius = '10px';
button.style.backgroundColor = 'green';


wrapper.appendChild(button);

button.onclick = function(){
    alert('Особая кнопка');
}

window.addEventListener('DOMContentLoaded', function(){
    // this.alert('DOM сформирован');
});