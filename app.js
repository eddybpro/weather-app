const keyAPI = 'a94cb22650f842ab8ec121134221512';
const warning = document.querySelector('.danger')
const locate = document.getElementById('locate')
const submitBtn = document.querySelector('.btn');
const container = document.querySelector('.card')
const clear = document.querySelector('.clear');



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(locate.value == ''){
        warning.classList.add('active')
    }else if(clear.classList.contains('fa-times')){
        locate.value = '';
        clear.classList.toggle('fa-times')
    }
    else{
    clear.classList.toggle('fa-times');
    warning.classList.remove('active')
    getWeatherData()
    }
})

async function getWeatherData(){
    const URL = `https://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${locate.value}&aqi=no`

    const res = await fetch(URL);
    const data = await res.json();

        container.innerHTML=`<div class="info">
    <div class="info-head">
        
        <div class="info-title">
            <h4 class="city">${data.location.name}</h4>
            <h4 class='country'>${data.location.country}</h4>
        </div>
    </div>
    
    <div class="weather-info">
        <img class='img-weather' src='${data.current.condition.icon}'/>
        <span class="temp">${data.current.temp_c}°</span>
        <img class='img-weather' src='${data.current.condition.icon}'/>
        <p class="desc">${data.current.condition.text}</p>
        
    </div>
</div>

<div class="text-container">
    <div class="date">
        <p>today:</p>
        <p class="today-date">${new Date(data.current.last_updated).getMonth()+1}/${new Date(data.current.last_updated).getDate()}/${new Date(data.current.last_updated).getFullYear()}</p>
    </div>
    <div class="text-info">
        <div class="box">
            <p>pressure</p>
            <p>${data.current.pressure_mb}mb</p>
        </div>
        <div class="box">
            <p>winds</p>
            <p>${data.current.wind_kph}kph</p>
        </div>
        <div class="box">
            <p>humidity</p>
            <p>${data.current.humidity}%</p>
        </div>
        <div class="box">
            <p>visibility</p>
            <p>${data.current.vis_km}km</p>
        </div>
    </div>
</div>
`

}












































