import createElement from './createElement.js';
import weather from './weather.js';

export default function api(){
    const input = createElement('input', [
        ['type', 'text']
    ]);

    const button = createElement('button', [
        ['type', 'submit']
    ], 'Find');

    const form = createElement('form', [
        ['class', 'form']
    ], [input, button]);

    const dataWeather = createElement('div', [
        ['class', 'weather']
    ]);

    form.addEventListener('submit', async e => {
        e.preventDefault();

        dataWeather.innerHTML = '';

        let data = await weather(input.value);

        const {
            main:{ 
                temp,
                feels_like
            },
            wind: {
                speed, 
                gust
            },
        } = data;


        const tempContainer = createElement('div', [
            ['class', 'temp']
        ], [`<div>Температура</div><div>${temp}</div>`]);
        const tempLikeContainer = createElement('div', [
            ['class', 'temp_like']
        ], [`<div>Температура по ощущениям</div><div>${feels_like}</div>`]);
        const windContainer = createElement('div', [
            ['class', 'temp_like']
        ], [`<div>Скорость ветра</div><div>${speed}</div>`]);
        const windGustContainer = createElement('div', [
            ['class', 'temp_like']
        ], [`<div>Порывы ветра</div><div>${gust}</div>`]);

        dataWeather.append(
            tempContainer, 
            tempLikeContainer, 
            windContainer,
            windGustContainer
            );
    });

    const container = createElement('div', [
        ['class', 'api_container']
    ], [form, dataWeather]);

    return container;
}