import marsAPI from "./marsAPI";
const init = () => {
    console.log(`mars b awll like, wazzzup, marvin?`);

    const formattedDate = timestamp => {
        const weekdays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
        const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
        const weekday = weekdays[timestamp.getDay()];
        const monthDate = timestamp.getDate();
        const month = months[timestamp.getMonth()];
        const year = timestamp.getFullYear();
        const hour = timestamp.getHours();
        const minutes = timestamp.getMinutes();
        const seconds = timestamp.getSeconds();
        return `${weekday}, ${monthDate}-${month}-${year}<br />${hour}:${minutes}:${seconds}GMT`
    }

    const barometerFormatted = pressure => `${parseFloat(pressure / 100).toFixed(4)} mb`;

    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

    const currentSeason = document.querySelector('#current-season')
    const dateSelector = document.querySelector('#date');
    const solDate = document.querySelector('#sol-date');
    const avg = document.querySelector('#avg');
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');
    const readingsCount = document.querySelector('#readings-count');
    // console.log(dateSelector, readingsCount, avg, min, max, solDate);

    const getMarsWeather = async() => {
        try {
            console.log("getting weather...");
            const res = await fetch(marsAPI);
            const weather = await res.json();
            console.log("here's the weather");
            console.log({ weather });
            // console.log(weather)
            const weatherKeys = Object.keys(weather);
            // console.log(weatherKeys);
            const marsWeather = weather[weatherKeys[1]]
            const { Last_UTC, PRE, Season } = marsWeather;
            // console.log(PRE);
            const { av, ct, mn, mx } = PRE;
            // console.log(Last_UTC, Season);
            // console.log(av, ct, mn, mx);
            const currentDate = new Date(Last_UTC);
            currentSeason.textContent = capitalize(Season);
            dateSelector.innerHTML = formattedDate(currentDate);
            solDate.textContent = weatherKeys[1];
            min.textContent = barometerFormatted(mn);
            max.textContent = barometerFormatted(mx);
            avg.textContent = barometerFormatted(av);
            readingsCount.textContent = ct;
        } catch (e) {
            console.log(`yo! error, bro... ${e}`);
            // console.log(e)
        }
    }

    getMarsWeather();

}
window.addEventListener('DOMContentLoaded', init);



// API for NASA:  https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0