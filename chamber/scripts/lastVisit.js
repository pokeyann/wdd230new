//discover page timestamp in footer

const lastVisit =  localStorage.getItem("lastVisit");


//if this is the first visit of the user
if(lastVisit === undefined || lastVisit === null){
  //tell the user this is his/her first visit
  document.querySelector("#lastVisit").textContent="This is your first visit.";

// else
} else{
  //Get the curret date
  const currentDate = Date.now();
  const lastVisitNum = +lastVisit;

  //calculate the difference between the last and current visit 
  const difference = currentDate - lastVisitNum;
  //const day = 1000 * 60 * 60 * 24;
  const day  = 1000

  const differenceInDays = Math.round(difference / day)


  //notidy the user how many day has it been since last visit
  document.querySelector("#lastVisit").textContent  = differenceInDays;

}

// Save the current date in local storage
localStorage.setItem("lastVisit", Date.now().toString())










