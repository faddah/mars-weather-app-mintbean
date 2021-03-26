const init = () => {
    console.log(`mars b awll like, wazzzup, marvin?`);
    var obj;
    fetch('https://api.nasa.gov/insight_weather/?api_key=kOXVp1PTgPA1EcbLORoZMKoAQXamLVGpNeMCW4tJ&feedtype=json&ver=1.0')
        .then(res => res.json())
        .then(obj => {
            sol = obj.sol_keys.slice(0, 7)
            const finalDateKey = sol[sol.length - 1]
                // console.log(sol)
            console.log(obj);
            console.log(sol);
            console.log(obj[finalDateKey].PRE.av);
            console.log(obj[finalDateKey].PRE.mn);

            const pressure = obj[finalDateKey].PRE.av;

            //aconsole.log(temperature)
            // either here, use a filter to get just the last day weather pressure
            // in pascals, and put that in some HTML, or....
            console.log(pressure);
        })

    .catch(e => console.log(e.message));
    console.log(obj);
}


window.addEventListener('DOMContentLoaded', init);



// API for NASA:  https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0