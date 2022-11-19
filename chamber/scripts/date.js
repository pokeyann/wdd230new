//header current date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

//footer current date and last modified
document.querySelector("#lastModified").textContent = 
  `Last Modification: ${document.lastModified}`;

//banner display on Tuesdays
const meet = document.querySelector(".banner"); 
 
if(now.getDay() == 2){
  meet.style.display = "in-line";
}
else{
  meet.style.display = "none";
}

console.log("This workds")

//hamburger menu
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
