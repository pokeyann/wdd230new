/* from discussion, Vitor Barros, 
const fetchData = async () => {
  const url = 'resources/data.json';

  const result = await fetch(url);
  return result.json();
} */

 const companies = src=data.json;
 
async function getCompanies() {
  const response = await fetch(companies);
  const data = await response.json();

}
let data = getCompanies();
/*console.log(JSON.parse(data.json)); how to connect to data.json?? */

/*const getCompanies = async () => {
  const company = "data.json";

  const result = await fetch(company);
  return result.json();
}*/