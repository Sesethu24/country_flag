const cName = document.querySelector(".showFlags");
const cFlag = document.querySelector(".myFlags");
const searchBtn = document.querySelector(".searchBtn");
const addNewCountry = document.querySelector(".addNewCountry");
const addNewFlag = document.querySelector(".myFlags");
const errorMessages = document.querySelector(".messages");
const dataDisplay = document.querySelector(".search");

let countries = [{ country: "Argentina", flag: "🇦🇷" },{ country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
{ country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
{ country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }];

if (localStorage['countries']) {
    countries = JSON.parse(localStorage.getItem('countries'));
  }
  
var templateSource = document.querySelector(".countryFlagTemp").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

function showData() {
    
    let filteredData = countries.map(function (element) {
      return element.country + " " + element.flag;
     
    });

    cName.innerHTML =  userTemplate({filteredData})
    }
  showData()

  function addAnotherCountry() {
    const newCountryAdded = addNewCountry.value;
    console.log(newCountryAdded)
    const newFlagAdded = addNewFlag.value;
    const newCountryToUpper = newCountryAdded.charAt(0).toUpperCase() + newCountryAdded.slice(1);
    const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
  
    function checkCountry(newCountryToUpper) {
      return countries.some(function (element) {
        return element.country === newCountryToUpper;
      });
    }
    function checkFlag(newFlagAdded) {
        return countries.some(function (element) {
          return element.flag === newFlagAdded;
        });
      }

     
      if (newCountryAdded && newFlagAdded != "") 
      {
        if (checkCountry(newCountryAdded) == false && checkFlag(newFlagAdded) == false) 
        {
         if (newCountryToUpper.match("^[a-zA-Z]*$")) 
          {
            if (newFlagAdded.match(flagRegex)) 
            {
              countries.push({ country: newCountryAdded, flag: newFlagAdded })
              dataDisplay.innerHTML = "The country and flag have been added successfully"
              localStorage.setItem('countries', JSON.stringify(countries))
               
            }
         }
       }
      }
      return{
      checkCountry,
      checkFlag
    }
} 
  addNewCountry.addEventListener('click', addAnotherCountry);
  searchBtn.addEventListener('click', showData);