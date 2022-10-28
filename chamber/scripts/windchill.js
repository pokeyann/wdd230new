const temp = 71;
const windspeed = 8;
const windchill = (35.74 + (0.6215*temp)) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));

document.getElementById("temp").innerHTML = temp;

if (temp <= 50 && windspeed >= 3) { 
  document.getElementById("windchill").innerHTML = Math.round(windchill);
}
else {
  document.getElementById("windchill").innerHTML = "N/A"; 
}

