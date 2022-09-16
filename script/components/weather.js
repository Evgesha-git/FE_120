export default async function weather(city){
    const key = '8643e5fa4d67cb1ad3c160e1d6c66d90';
    let data = null;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`)
        .then(resp => resp.json())
        .then(d => data = d)
        .catch(error => {
            data = error;
        });
    
    if(data.cod === 200) return data;
}