// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
/*const datefieldUK = document.querySelector("aside");*/ // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
/*const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);*/
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
/*datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;*/

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;



const meet = datefield.getDay(2);

function myFunction() {
  const meet = document.querySelector("banner");

  if (meet.style.display === "none") {
    meet.style.display = "block";
  } else {
    meet.style.display = "none";
  }
}






