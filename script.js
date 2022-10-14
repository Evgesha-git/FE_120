/**
 * 1 - создание элемента
 * 2 - отображение на странице
 */

const main = document.createElement('div');
main.classList.add('main');
main.setAttribute('data-id', '4h5k3');
main.innerText = 'Main contern';

const h1 = document.createElement('h1');
h1.innerText = 'Header';

const p = document.createElement('p');
p.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing.';

document.getElementById('root').append(main, h1, p);

// React ------------------------

const spanR = React.createElement('stan', null, 'Header react')

const h1R = React.createElement('h1', {className: 'Header'}, spanR);

const pR = React.createElement('p', null, 'Lorem ipsum, dolor sit amet consectetur adipisicing.');

const main2 = React.createElement('div', {
    className: 'class1 class2 class3',
    'data-id': 's87frs87df',
}, [
    'Main react content',
    h1R,
    pR,
    React.createElement('img', {
        src: 'https://via.placeholder.com/50',
        alt: '####',
    }),
]);

ReactDOM.render(main2, document.getElementById('root1'));

/**
 * 3 - Компоненты
 */

function Logo(){
    this.create = () => {
        this.elem = document.createElement('div');
        this.elem.classList.add('logo_1');
        this.elem.innerHTML = `
            <a href="#"><img src="https://via.placeholder.com/200x50" alt="###"/></a>
        `;
        return this.elem;
    }
}

const logo = new Logo().create();
document.getElementById('root2').append(logo);

//----------------------

function ReactLogo(){
    const logo = React.createElement('div', 
        {className: 'logo'},
        React.createElement('a', 
            {href: '#'},
                React.createElement('img', {
                    src: 'https://via.placeholder.com/200x50',
                    alt: '***',
                }),
            ),
        );
    return logo;
}

// ReactDOM.render(ReactLogo(), document.getElementById('root3'));
ReactDOM.render(React.createElement('div', null, [main2, ReactLogo()]), 
document.getElementById('root3'));

/**
 * JSX => React
 */

ReactDOM.render(
    <React.Fragment>
        <main className='main' data-id='34j5k3'>
            <h1>Header JSX</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div className='logo'>
                <a href='#'>
                    <img src="https://via.placeholder.com/200x80" alt='###' />
                </a>
            </div>
        </main>
    </React.Fragment>,
    document.getElementById('root4')
);