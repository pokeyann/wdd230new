// f = wind chill factor in fahrenheit
// t = air average temperature
// s = wind speed in miles per hour
// formula = f = 35.74 + 0.6215t - 35.75s raised to 0.16 + 0.4275 t s raised to 0.16
//Wind Chill Specification Limits: Wind Chill Temperature is officially defined for temperatures at or below
// 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph). <=50°F and >3.0mph

const temp = 50;
const windspeed = 8;
const windchill = (35.74 + (0.6215*temp)) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));

  document.querySelector("#windchill").textContent = Math.round(windchill);

if (temp <= 50 && windspeed >= 3) { 
  console.log(windchill);
}
else {
  console.log("N/A");
}

