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

window.addEventListener('DOMContentLoaded', init);



// API for NASA:  https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0