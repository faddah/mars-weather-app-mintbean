const init = () => {
var obj;
fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
  .then(res => res.json())
  .then(obj => {
       sol = obj.sol_keys.slice(0,7) 
      // console.log(sol)
       console.log(obj)
       //temperature = obj[sol].AT.av;
       //aconsole.log(temperature)
  })
  .catch(e => console.log(e.message));
}
window.addEventListener('DOMContentLoaded', init);