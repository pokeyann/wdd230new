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

/* ****from Horzontal CodePen ****
Code for date in footer but this is only the year portion, does not cover the last modified part
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();
*/