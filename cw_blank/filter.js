const filter = function(selector) {
    const container = document.getElementById(selector);
    const buttons = container.querySelector('.portfolio__filter').children;
    const elements = container.querySelector('.portfolio__list').children;

    const show = e => {
        let filter = e.target.dataset.filter;

        [...buttons].forEach(el => el.classList.remove('active'));

        e.target.classList.add('active');

        if (filter === 'all'){
            [...elements].forEach(elem => elem.classList.remove('hide'));
        }else{
            [...elements].forEach(elem => elem.classList.remove('hide'));
            [...elements].forEach(elem => {
                if (elem.dataset.filter !== filter) elem.classList.add('hide');
            });
        }

    }
    
    [...buttons].forEach(el => {
        el.addEventListener('click', show)
    })
};

filter('portfolio'); // id