const form = document.querySelector('form')
const body = document.getElementById('body')
const inputCity = document.querySelector('input')
const description = document.querySelector('.weather_des')
const container = document.querySelector('.container')



form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const city = inputCity.value
    const apiKey = "ca6bd39b8ba647c8d46bd55aa5762f84";
    let cityBg = city.replace(/\s/g, "");
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=31a9dd589649662940537fe79e063fc3`
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}&lang=vi`
    const response = await fetch(url);
    const data = await response.json();

    // body.style.backgroundImage = url(bgData)

    description.innerHTML = `
        <h2>Thời tiết tại ${data.name}</h2>
        <h3>Nhiệt độ: ${data.main.temp}°C</h3>
        <p>Độ ẩm: ${data.main.humidity}%</p>
        <p>${data.weather[0].description}</p>
        <button class='convert'>Convert temp</button>
    `   



    // document.querySelector('.convert').addEventListener('click', ConvertTemp)
    

    let bgImg = `https://source.unsplash.com/1600x900?${cityBg}`
    body.style.backgroundImage = `url(${bgImg})`
    // container.style.backgroundImage = 
    console.log(cityBg);
    // console.log(bgImg);
    // container.getElementsByClassName.backgroundImage = url(``)
})