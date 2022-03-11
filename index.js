const cName = document.querySelector(".showFlags");
//const cFlag = document.querySelector(".myFlags");
const searchBtn = document.querySelector(".searchBtn");
const addCountry = document.querySelector(".enterCountry");
const addNewFlag = document.querySelector(".myFlags");
const errorMessages = document.querySelector(".display");
const dataDisplay = document.querySelector(".search");
const addCountryBtn = document.querySelector(".addNewCountry");

let countries = [{ country: "Argentina", flag: "🇦🇷" },{ country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
{ country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
{ country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }];

countries.sort();

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
    const newCountryAdded = addCountry.value;
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
              showData();
              dataDisplay.innerHTML = "The country and flag have been added successfully"
              localStorage.setItem('countries', JSON.stringify(countries))
            }
         }
       }
      }else 
      if (newCountryToUpper == "" && newFlagAdded == "") {
        errorMessages.innerHTML = "Please enter a country name and insert a flag"
      }
      setTimeout(function () {
        errorMessages.innerHTML = "";
      }, 3000);
    
      return{
      checkCountry,
      checkFlag
    }
} 
  addCountryBtn.addEventListener('click', addAnotherCountry);
  //dataDisplay.addEventListener('click', showData);