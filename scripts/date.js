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


//getTime
//toLocaleTimeString
//.getTime() research shows it is new Date().getTime();  I haven't gotten this to work.   Date.getTime()
