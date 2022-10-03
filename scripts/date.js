try {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options); 
  } catch (e) {
  alert("Error with code");
}

/*document.getElementById("currentdate").textContent = new Date().getTime().toLocaleDateString("en-US");*/
/*just keep trying to make all this work and create a change so I can push this again.

//getTime
//toLocaleTimeString
//.getTime() research shows it is new Date().getTime();  I haven't gotten this to work.   Date.getTime()
