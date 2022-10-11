System.register(["./m"], function (exports_1, context_1) {
    "use strict";
    var m_1, num, str, bool, arr, arr2, arr3, arr4, obj, f2, f3, f4, elem, f5, arr5, arr6, arr7, arr8, num2, Season, current3, s, str1, str2, date, reg, div, list, list2, user, user1, user3, users, users1, f8;
    var __moduleName = context_1 && context_1.id;
    function f1(a, b) {
        return a.toString() + b.toString();
    }
    function f6(a, b = 0) {
        return a + b;
    }
    function f7(...rest) {
        console.log(rest);
    }
    return {
        setters: [
            function (m_1_1) {
                m_1 = m_1_1;
            }
        ],
        execute: function () {
            num = 23;
            str = 'str';
            bool = true;
            arr = [1, 2, 3, 'f'];
            arr2 = [1, 2, 3];
            arr3 = ['1', '2', '3'];
            arr4 = [];
            obj = {
                name: 'Jhon',
                age: 33,
            };
            obj = { name: 'Erick', age: 44 };
            for (let i = 0; i < 10; i++) {
                console.log(i);
            }
            console.log(f1(2, 5));
            f2 = (a) => {
                return Math.pow(a, 2);
            };
            f3 = (a) => {
                console.log(a);
                return a;
            };
            f4 = (a) => {
                console.log(a);
                return;
            };
            elem = document.querySelector('.output');
            f5 = (elem, text) => {
                elem.innerText = text;
                elem.addEventListener('click', (e) => {
                    console.log(e.target);
                });
            };
            arr5 = ['str', 56];
            arr5[0] = 'fff';
            arr6 = ['str', 56];
            arr7 = ['sss', 45];
            arr8 = ['dd', 2, 3, 4, 5, 6];
            (function (Season) {
                Season["Winter"] = "\u041E\u0441\u0435\u043D\u044C";
                Season["Spring"] = "\u0417\u0438\u043C\u0430";
                Season["Summer"] = "\u0412\u0435\u0441\u043D\u0430";
                Season["Autum"] = "\u041B\u0435\u0442\u043E";
            })(Season || (Season = {}));
            ;
            current3 = Season.Summer;
            console.log(current3);
            s = 'str';
            str1 = 'error';
            str2 = 'warning';
            date = new Date();
            console.log(date.getTime());
            reg = /.+?/gi;
            div = document.createElement('div');
            list = document.querySelectorAll('div');
            list2 = document.getElementsByTagName('div');
            user = {
                name: "Alex",
                age: 33,
                weigth: 144,
            };
            user1 = {
                name: 'User1',
                age: 44,
                color: ['#f0f'],
            };
            user3 = {
                name: "Petr",
                age: 32,
            };
            users = [
                {
                    id: 1,
                    user: {
                        name: "Alex",
                        age: 22
                    }
                }
            ];
            users1 = [
                {
                    id: 1,
                    user: {
                        name: "Alex",
                        age: 22
                    }
                }
            ];
            console.log(f6(1, 5));
            console.log(f6(1));
            console.log(f6(1, 6));
            f7(1, 2, 3, 4);
            f8 = (a, b) => {
                return a + b;
            };
            console.log(m_1.default());
        }
    };
});
//# sourceMappingURL=app.js.map