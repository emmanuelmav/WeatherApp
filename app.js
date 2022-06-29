const form = document.querySelector('form');
const search = document.querySelector('input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temperature');

const climate = document.querySelector('.climate');



form.addEventListener('submit', async function (e) {
    e.preventDefault()


    const searchVal = search.value;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a3c182b7896849949d5134008221005&q=${searchVal}&aqi=no`);

    const data = await response.json();


    const condition = data.current.condition.text;
    const cityName = data.location.name;
    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;

    console.log(data);
    console.log(cityName);
    console.log(condition);
    console.log(tempC);
    console.log(tempF);

    city.textContent = cityName;
    tempSpan.textContent = tempC;
    tempSym.textContent = `°C`;
    // temp.textContent = `${tempC}°F`;
    climate.textContent = condition;





});


const tempSpan = document.querySelector('span');
const celsiusBtn = document.querySelector('.celsius');
const farenheitBtn = document.querySelector('.farenheit');
const tempSym = document.querySelector('sup');

celsiusBtn.addEventListener('click', () => {
    if (temp.textContent.includes('F')) {
        const convertToC = (parseInt(tempSpan.textContent) - 32) * 5 / 9;
        console.log(convertToC);
        console.log(tempSpan.textContent);
        tempSym.textContent = `°C`;
        tempSpan.textContent = convertToC;
        tempSpan.textContent = tempSpan.textContent.substring(0, 2)

        celsiusBtn.style.backgroundColor = "coral";
        farenheitBtn.style.backgroundColor = "white";
    }

});

farenheitBtn.addEventListener('click', () => {
    if (temp.textContent.includes('C')) {
        const convertToF = (parseInt(tempSpan.textContent) * 9 / 5) + 32;
        console.log(convertToF);
        tempSym.textContent = `°F`;
        tempSpan.textContent = convertToF;
        tempSpan.textContent = tempSpan.textContent.substring(0, 2)

        farenheitBtn.style.backgroundColor = "coral";
        celsiusBtn.style.backgroundColor = "white";
    }
});



// Farenheit to Celsius
// (temp - 32) * 5 / 9

    // Celcius to Farenheit
    // (temp) * 9 / 5) + 32










