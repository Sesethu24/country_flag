const cName = document.querySelector(".enterCountry");
const cFlag = document.querySelector(".myFlags");
const searchBtn = document.querySelector(".searchBtn");
const addNewCountry = document.querySelector(".addCountry");
const addNewFlag = document.querySelector(".addFlag");
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
    cName.innerHTML = userTemplate({ countryFlag: filteredData });
    console.log(filteredData);
  }
  showData()

  function addAnotherCountry() {
    const newCountryAdded = addNewCountry.value;
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

      return{
          checkCountry,
          checkFlag
      }
  }

  searchBtn.addEventListener('click', showData);
  dataDisplay.addEventListener('click', addAnotherCountry);