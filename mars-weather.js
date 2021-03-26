const init = () => {
    console.log(`mars b awll like, wazzzup, marvin?`);
    var obj;
    const getMarsWeather = () => {
        const marsPromise = new Promise(fetch('https://api.nasa.gov/insight_weather/?api_key=kOXVp1PTgPA1EcbLORoZMKoAQXamLVGpNeMCW4tJ&feedtype=json&ver=1.0')
            .then(res => res.json())
            .then(obj => {
                const sol = obj.sol_keys.slice(0, 7)
                const finalDateKey = sol[sol.length - 1]
                    // console.log(sol)
                console.log(obj);
                console.log(sol);
                console.log(obj[finalDateKey].PRE.av);
                console.log(obj[finalDateKey].PRE.mn);

                const pressure = obj[finalDateKey].PRE.av;

                //console.log(temperature)
                // either here, use a filter to get just the last day weather pressure
                // in pascals, and put that in some HTML, or....
                console.log(pressure);
            })

            .catch(e => console.log(e.message)));
        // fetch('https://api.nasa.gov/insight_weather/?api_key=kOXVp1PTgPA1EcbLORoZMKoAQXamLVGpNeMCW4tJ&feedtype=json&ver=1.0')

        return marsPromise;
    }


    const { newObj } = getMarsWeather(res => res.data);
    console.log(newObj)

    const sol = newObj.sol_keys.slice(0, 7);
    const finalDateKey = sol[sol.length - 1];

    const { Last_UTC } = newObj[finalDateKey];
    const date = document.querySelector('#current-date');
    date.innerHTML = `${Last_UTC}`

    //destructure the object to put the data in the selectors
    //remember its #ids, not .classes
    //just get the first one to work and then go from there
    //create each of the selector in the JS 
}

window.addEventListener('DOMContentLoaded', init);

//const currentDate = document.querySelector( '#current-date' )
//currentDate inner HTML and then put the destructured variable as the value. you can use string interpolation `${}`


// API for NASA:  https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0